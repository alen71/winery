import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { fonts } from 'src/style/fonts'

export default class Document extends NextDocument {
  render() {
    return (
      <Html className="">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0047ff" />
        </Head>
        <body
          className={`bg-gray-bg text-white overflow-x-hidden overflow-y-scroll text-base md:text-lg ${fonts.jeko.className}`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
