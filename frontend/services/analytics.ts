import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(process.env.NEXT_STATIC_GOOGLE_ANALYTICS_TAG, {
    gaOptions: { debug: true },
    gtagOptions: { debug: true },
  });
  console.log("Reaching here 1");
};

export const logPageView = (url: string, title: string) => {
  ReactGA.set({ page: url });
  ReactGA.send({ hitType: "pageview", page: url, title: title });
  console.log("Reaching here 2");
};

export const clickEvent = (button: string) => {
  // Send a custom event
  ReactGA.event({
    category: "Button Clicked Event",
    action: button,
    // label: "your label", // optional
    // value: 99, // optional, must be a number
    // nonInteraction: true, // optional, true/false
    // transport: "xhr", // optional, beacon/xhr/image
  });
};
