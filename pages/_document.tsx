import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

import { Header } from '../layout';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
