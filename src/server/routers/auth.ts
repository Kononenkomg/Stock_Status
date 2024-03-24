import { z } from 'zod'
import { procedure, router } from '../trpc'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '@/constants/secret'
import {
  getUserByEmail,
  initialSetUp,
  isTableExists,
  openDB,
} from '@/utils/sqlite'
import { userSchema } from '@/schemas'

export const authRouter = router({
  auth: procedure
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
          const tableExists = await isTableExists(db, 'users')
          if (!tableExists) {
            await initialSetUp(db)
          }
          const user = await getUserByEmail(db, decoded.email)
          const validatedUser = userSchema.parse(user)

          db.close()
          return {
            status: 'ok',
            user: {
              name: validatedUser.name,
              email: validatedUser.email,
              role: user.role,
              permissions: user.permissions,
            },
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
  login: procedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { email, password } = input
      const db = openDB()
      const tableExists = await isTableExists(db, 'users')
      if (!tableExists) {
        await initialSetUp(db)
      }
      const user = await getUserByEmail(db, email)
      if (!user) {
        throw new Error('Invalid email')
      }
      const validatedUser = userSchema.parse(user)

      if (validatedUser.password !== password) {
        throw new Error('Invalid password')
      }
      const token = jwt.sign({ email }, SECRET_KEY)
      return token
    }),
})
