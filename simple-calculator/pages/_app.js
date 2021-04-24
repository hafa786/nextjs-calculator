import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
          <title>A simple calculator</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={""}
          />
          <meta name="og:title" content={""} />
          <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Component {...pageProps} />
  </>);
}

export default MyApp
