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
