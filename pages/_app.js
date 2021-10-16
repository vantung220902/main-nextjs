import '../styles/globals.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../theme';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <ChakraProvider>
      <ColorModeScript resetCSS theme={theme} initialColorMode="light" />
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
