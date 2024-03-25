import { z } from 'zod'
import { procedure, router } from '../trpc'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '@/constants/secret'
import {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  openDB,
  updateUser,
} from '@/utils/sqlite'
import { userSchema } from '@/schemas'

export const userRouter = router({
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

          if (validatedUser.role !== 'admin') {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          if (validatedUser.permissions.includes('admin:read')) {
            const users = await getAllUsers(db)
            const validatedUsers = users.map((user) => userSchema.parse(user))
            db.close()
            return validatedUsers
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
  update: procedure
    .input(
      z.object({
        token: z.string(),
        users: z.array(userSchema.omit({ password: true })),
      })
    )
    .mutation(async ({ input }) => {
      const { token, users } = input
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        if (typeof decoded !== 'string' && 'email' in decoded) {
          const db = openDB()

          const currentUser = await getUserByEmail(db, decoded.email)
          const validatedCurrentUser = userSchema.parse(currentUser)

          if (
            validatedCurrentUser.role !== 'admin' ||
            !validatedCurrentUser.permissions.includes('admin:write')
          ) {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedCurrentUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          if (validatedCurrentUser.permissions.includes('admin:write')) {
            await Promise.all(
              users.map((user) => {
                updateUser(db, user)
              })
            )

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
  getUserNameById: procedure
    .input(
      z.object({
        token: z.string(),
        userId: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const { token, userId } = input
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        if (typeof decoded !== 'string' && 'email' in decoded) {
          const db = openDB()

          const currentUser = await getUserByEmail(db, decoded.email)
          const validatedCurrentUser = userSchema.parse(currentUser)

          if (validatedCurrentUser.role !== 'manager') {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedCurrentUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          if (validatedCurrentUser.permissions.includes('admin:read')) {
            const user = await getUserById(db, userId)
            const validatedUser = userSchema.parse(user)
            db.close()
            return { userName: validatedUser.name }
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
  createNewUser: procedure
    .input(
      z.object({
        token: z.string(),
        newUser: userSchema.omit({ id: true }),
      })
    )
    .mutation(async ({ input }) => {
      const { token, newUser } = input
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        if (typeof decoded !== 'string' && 'email' in decoded) {
          const db = openDB()

          const currentUser = await getUserByEmail(db, decoded.email)
          const validatedCurrentUser = userSchema.parse(currentUser)

          if (
            validatedCurrentUser.role !== 'admin' ||
            !validatedCurrentUser.permissions.includes('admin:write')
          ) {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedCurrentUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          if (validatedCurrentUser.permissions.includes('admin:write')) {
            await createUser(db, newUser)

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
