import { useState, useEffect } from "react";

type ScreenSize = {
  width: number;
  height: number;
};

export const useScreenSize = (): ScreenSize => {
  if (typeof window !== "undefined") {
    const [screenSize, setScreenSize] = useState<ScreenSize>({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return screenSize;
  }
  return;
};

export function truncateString(str: string, len: number) {
  return str?.length > len ? str.substring(0, len) + "..." : str;
}

// Function to reload the window with additional query parameters
export function reloadWithQueryParams(router) {
  const queryParams = {
    // Additional query parameters
    noguestlogin: true,
    message: "Please Login in with User Account!",
  };
  // Reload the window with additional query parameters
  router.replace({
    pathname: router.pathname,
    query: {
      ...router.query,
      ...queryParams,
    },
  });

  // Generate the new URL with query parameters
  const newUrl = `${window.location.pathname}?${new URLSearchParams({
    ...router.query,
    ...queryParams,
  })}`;

  // Reload the window with the new URL
  window.location.href = newUrl;
}

// Function to reload the window with additional query parameters
export function reloadWithQueryParams_message(router, message) {
  const queryParams = {
    // Additional query parameters
    noguestlogin: true,
    message: message,
  };
  // Reload the window with additional query parameters
  router.replace({
    pathname: router.pathname,
    query: {
      ...router.query,
      ...queryParams,
    },
  });

  // Generate the new URL with query parameters
  const newUrl = `${window.location.pathname}?${new URLSearchParams({
    ...router.query,
    ...queryParams,
  })}`;

  // Reload the window with the new URL
  window.location.href = newUrl;
}

// Function to reload the window with additional query parameters
export function reloadWithQueryParams_NoMessage(router) {
  const queryParams = {
    // Additional query parameters
    noguestlogin: true,
  };
  // Reload the window with additional query parameters
  router.replace({
    pathname: router.pathname,
    query: {
      ...router.query,
      ...queryParams,
    },
  });

  // Generate the new URL with query parameters
  const newUrl = `${window.location.pathname}?${new URLSearchParams({
    ...router.query,
    ...queryParams,
  })}`;

  // Reload the window with the new URL
  window.location.href = newUrl;
}
