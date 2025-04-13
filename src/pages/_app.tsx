import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";

import Notifications from "../components/Notification";
import { AppBar } from "components/AppBar";
import Script from "next/script";
import  Footer  from "../components/Footer";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({Component, pageProps}) => {
  return(
    <div className="bg-default-900">
      <Head>
        <title>
          Solana Token Creator
        </title>
      </Head>
        <ContextProvider>
          <Notifications />
          <AppBar />
          <Component {...pageProps} />
          <Footer />
        </ContextProvider>

        {/* {Scripts} */}
        <Script src="assets/libs/preline/preline.js"></Script>
        <Script src="assets/libs/swiper/swiper-bundle.min.js"></Script>
        <Script src="assets/libs/gumshoejs/gumshoe.polyfills.min.js"></Script>
        {/* <Script src="assets/libs/lucide/umd/lucide.min.js"></Script> */}
        <Script src="assets/libs/aos/aos.js"></Script>
        <Script src="assets/libs/js/swiper.js"></Script>
        <Script src="assets/libs/lucide/lucide.min.js"></Script>
        <Script src="assets/libs/js/theme.js"></Script>
    </div>
  )
}

export default App;