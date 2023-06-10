import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize(process.env.NEXT_STATIC_GOOGLE_ANALYTICS_TAG, {
    debug: true,
  });
};

export const logPageView = (url: string) => {
  ReactGA.set({ page: url });
  ReactGA.pageview(url);
};
