import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/Footer"));
import { ModalProvider } from "../context/modalContext";
const UserInfo = dynamic(() => import("../components/UserInfo"));

function ASI({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Al Akhawayn School of Ifrane</title>
        <meta
          name="description"
          content="Al Akhawayn School of Ifrane was founded in 1995, and is the only English language, co-educational Nursey-12 school in Ifrane, Morocco, following the American educational model."
        />
        <meta
          name="keywords"
          content="Ifrane, School, English, American, Morocco, Nursey-12"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Al Akhawayn School of Ifrane" />
        <meta
          property="og:description"
          content="Al Akhawayn School of Ifrane was founded in 1995, and is the only English language, co-educational Nursey-12 school in Ifrane, Morocco, following the American educational model."
        />
        <meta
          property="og:image"
          content="https://d3fcz7ljffveq5.cloudfront.net/sites/default/files/asi-logo_0.png"
        />
        <meta property="og:image:alt" content="ASI" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Al Akhawayn School of Ifrane" />
        <meta
          name="twitter:description"
          content="Al Akhawayn School of Ifrane was founded in 1995, and is the only English language, co-educational Nursey-12 school in Ifrane, Morocco, following the American educational model."
        />
        <meta
          name="twitter:image"
          content="https://d3fcz7ljffveq5.cloudfront.net/sites/default/files/asi-logo_0.png"
        />
        <meta name="twitter:image:alt" content="ASI" />
        <meta name="author" content="Sami Laayouni" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/assets/logo/logo.jpg" />
      </Head>
      <ModalProvider>
        <NavBar />
        <UserInfo />
        <Component {...pageProps} />
        <Footer />
      </ModalProvider>
    </>
  );
}

export default ASI;
