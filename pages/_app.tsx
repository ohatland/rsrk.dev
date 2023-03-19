import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RSRK.dev</title>
        <meta name="description" content="Samling av verktøy laget av og for Redningsselskapets frivillige Sjøredningskorps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rs-logo-32x32.png" />
        <link rel="icon" href="/rs-logo-192x192.png" />
      </Head>
      <Component {...pageProps} />
    </>
    )
}
