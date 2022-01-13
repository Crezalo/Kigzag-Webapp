  import { Web3ReactProvider } from "@web3-react/core";
  import type { AppProps } from "next/app";
  import getLibrary from "../getLibrary";
  import "../styles/globals.css";
  import '../styles/globals.css'
  import Link from 'next/link'
  import Image from 'next/image'
  import Account from "../components/Account";
  import useEagerConnect from "../hooks/useEagerConnect";

import ChainName from "../components/ChainName";

  function MyApp({ Component, pageProps }) {

    const triedToEagerConnect = useEagerConnect();

    return (
      <div>
        <Web3ReactProvider getLibrary={getLibrary}>
          <nav className="p-1" style={{backgroundColor:'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Link href="/">  
              <a>
                &nbsp;&nbsp;
                <Image
                  src="/../public/favicon.ico"
                  alt="Picture of the author"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
            <Link href="/">
              <a className="mr-4 text-green-500 py-2" style={{fontSize:18}}>
                Dashboard
              </a>
            </Link>
            <Link href="/Creators">
              <a className="mr-6 text-green-500 py-2" style={{fontSize:18}}>
              Creators
              </a>
            </Link>
            <ChainName triedToEagerConnect={triedToEagerConnect} />
            <Account triedToEagerConnect={triedToEagerConnect} />
          </nav>
          <Component {...pageProps} />
        </Web3ReactProvider>
      </div>
    )
  }

  export default MyApp
