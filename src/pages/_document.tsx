import Document, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from 'theme/stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
