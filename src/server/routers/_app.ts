import { procedure, router } from '../trpc'
import { authRouter } from './auth'
import { paintRouter } from './paints'
import { userRouter } from './users'

export const appRouter = router({
  check: procedure.query(() => {
    return { ok: 'Up' }
  }),
  auth: authRouter,
  user: userRouter,
  paint: paintRouter,
})

export type AppRouter = typeof appRouter
