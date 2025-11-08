import "@/styles/globals.css";
import Navbar from "@/components/organisms/Navbar";
import WhatsAppButton from "@/components/atoms/WhatsAppButton/WhatsAppButton";
import Footer from "@/components/organisms/Footer";
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <WhatsAppButton />
      <Footer/>
    </>
  );
}
