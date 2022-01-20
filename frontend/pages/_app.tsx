import { Web3ReactProvider } from "@web3-react/core";
import Header from "../components/Header";
import getLibrary from "../getLibrary";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
