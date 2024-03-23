
import { createTRPCProxyClient } from '@trpc/client';
import { AppRouter } from './routers/_app';
import superjson from 'superjson'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import dotenv from 'dotenv';
dotenv.config();


export const proxyClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // url: process.env.STAGE === 'development' ? 'http://localhost:3000/api/trpc' : 'https://stock-status-ruddy.vercel.app/api/trpc',
      url: 'https://stock-status-ruddy.vercel.app/api/trpc'
    }),
  ],
  transformer: superjson,
});
