import { z } from 'zod'
import { procedure, router } from '../trpc'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '@/constants/secret'
import {
  cancelOrder,
  completeOrder,
  createOrder,
  createOrdersTable,
  getAllOrders,
  getUserByEmail,
  isTableExists,
  openDB,
} from '@/utils/sqlite'
import { userSchema, orderSchema } from '@/schemas'

export const orderRouter = router({
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
          const isOrdersTable = await isTableExists(db, 'orders')

          if (!isOrdersTable) {
            await createOrdersTable(db)
          }

          const user = await getUserByEmail(db, decoded.email)
          const validatedUser = userSchema.parse(user)
          if (validatedUser.role !== 'manager') {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          if (validatedUser.role === 'manager') {
            const orders = await getAllOrders(db)
            const validatedOrders = orders.map((order) =>
              orderSchema.parse(order)
            )
            db.close()
            return validatedOrders
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
  createOrder: procedure
    .input(
      z.object({
        token: z.string(),
        paintId: z.number(),
        quantity: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const { token, paintId, quantity } = input
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        if (typeof decoded !== 'string' && 'email' in decoded) {
          const db = openDB()

          const user = await getUserByEmail(db, decoded.email)
          const validatedUser = userSchema.parse(user)

          if (validatedUser.role !== 'manager') {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          await createOrder(db, {
            id: Math.floor(Math.random() * 1000),
            userId: validatedUser.id,
            paintId,
            quantity,
            date: new Date().toISOString(),
            status: 'pending',
          })
          db.close()
          return {
            status: 'ok',
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
  cancelOrder: procedure
    .input(
      z.object({
        token: z.string(),
        orderId: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const { token, orderId } = input
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        if (typeof decoded !== 'string' && 'email' in decoded) {
          const db = openDB()

          const user = await getUserByEmail(db, decoded.email)
          const validatedUser = userSchema.parse(user)

          if (validatedUser.role !== 'manager') {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          await cancelOrder(db, orderId)
          db.close()
          return {
            status: 'ok',
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
  completeOrder: procedure
    .input(
      z.object({
        token: z.string(),
        orderId: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const { token, orderId } = input
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        if (typeof decoded !== 'string' && 'email' in decoded) {
          const db = openDB()

          const user = await getUserByEmail(db, decoded.email)
          const validatedUser = userSchema.parse(user)

          if (validatedUser.role !== 'manager') {
            db.close()

            throw new Error('Unauthorized')
          }

          if (validatedUser.disabled) {
            db.close()

            throw new Error('User is disabled')
          }

          await completeOrder(db, orderId)
          db.close()
          return {
            status: 'ok',
          }
        }
        throw new Error('Invalid token')
      } catch (err) {
        // token is invalid
        throw new Error('Invalid token')
      }
    }),
})
