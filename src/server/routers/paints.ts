import { z } from 'zod'
import { procedure, router } from '../trpc'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '@/constants/secret'
import {
  getAllPaints,
  getUserByEmail,
  openDB,
  updatePaintStock,
} from '@/utils/sqlite'
import { paintSchema, userSchema } from '@/schemas'

export const paintRouter = router({
  getAll: procedure
    .input(
      z.object({
        token: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { token } = input
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        if (typeof decoded !== 'string' && 'email' in decoded) {
          const db = openDB()

          const user = await getUserByEmail(db, decoded.email)
          const validatedUser = userSchema.parse(user)
          if (!validatedUser.permissions.includes('painter:read')) {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          if (validatedUser.permissions.includes('painter:read')) {
            const paints = await getAllPaints(db)
            const validatedPaints = paints.map((paint) =>
              paintSchema.parse(paint)
            )
            db.close()
            return validatedPaints
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
  updatePaintStock: procedure
    .input(
      z.object({
        token: z.string(),
        paintId: z.number(),
        newStock: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { token, paintId, newStock } = input
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        if (typeof decoded !== 'string' && 'email' in decoded) {
          const db = openDB()

          const user = await getUserByEmail(db, decoded.email)
          const validatedUser = userSchema.parse(user)

          if (!validatedUser.permissions.includes('painter:write')) {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          if (validatedUser.permissions.includes('painter:write')) {
            await updatePaintStock(db, paintId, newStock)
            db.close()
            return {
              status: 'ok',
            }
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
})
