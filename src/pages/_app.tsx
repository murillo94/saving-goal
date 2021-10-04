import Head from 'next/head';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Savings plan simulation</title>
      <meta name="description" content="Plan your saving goal easily" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
