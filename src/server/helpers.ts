
import { createTRPCProxyClient } from '@trpc/client';
import { AppRouter } from './routers/_app';
import superjson from 'superjson'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';


export const proxyClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
  transformer: superjson,
});
