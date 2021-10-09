import { IdProvider } from '@radix-ui/react-id';
import Head from 'next/head';

import { Header } from 'components';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <IdProvider>
    <Head>
      <title>Savings plan simulation</title>
      <meta name="description" content="Plan your saving goal easily" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </IdProvider>
);

export default App;
