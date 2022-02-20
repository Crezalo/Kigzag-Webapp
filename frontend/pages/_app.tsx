import { Web3ReactProvider } from "@web3-react/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getLibrary from "../getLibrary";
import "../styles/globals.css";
import { useEffect } from "react";
// import { createTheme } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

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
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="pageMinHeight">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      <Footer />
    </Web3ReactProvider>
  );
}
