import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { useEffect } from "react";
// import { createTheme } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga";

// styles
import "emoji-mart/css/emoji-mart.css";
import FeedbackButton from "../components/FeedbackButton";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../services/analytics";

library.add(fas, faCheckSquare, faCoffee);

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  // Track page views on route change
  useEffect(() => {
    initGA();
    logPageView(window.location.pathname);

    // Track page view on route change
    const handleRouteChange = (url) => {
      logPageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="pageMinHeight">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      <FeedbackButton />
      <Footer />
    </div>
  );
}
