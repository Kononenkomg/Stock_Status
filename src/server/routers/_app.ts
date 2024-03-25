import { procedure, router } from '../trpc'
import { authRouter } from './auth'
import { orderRouter } from './orders'
import { paintRouter } from './paints'
import { userRouter } from './users'

export const appRouter = router({
  check: procedure.query(() => {
    return { ok: 'Up' }
  }),
  auth: authRouter,
  user: userRouter,
  paint: paintRouter,
  orders: orderRouter,
})

export type AppRouter = typeof appRouter
