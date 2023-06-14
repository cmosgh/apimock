import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import dynamic from 'next/dynamic';


// this is ignored in production
if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  require('../mocks');
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  }
});

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
