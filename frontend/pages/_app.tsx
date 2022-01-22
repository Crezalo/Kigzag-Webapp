import { Web3ReactProvider } from "@web3-react/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getLibrary from "../getLibrary";
import "../styles/globals.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => { document.body.style.backgroundColor = 'black' }, []);
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Web3ReactProvider>
  );
}
