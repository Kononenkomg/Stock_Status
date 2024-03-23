import { procedure, router } from '../trpc'
import { authRouter } from './auth'

export const appRouter = router({
  check: procedure.query(() => {
    return { ok: 'Up' }
  }),
  auth: authRouter
})

export type AppRouter = typeof appRouter
