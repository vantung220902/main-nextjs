import '../styles/globals.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../theme';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript resetCSS theme={theme} initialColorMode="light" />
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
