import { useState, useEffect } from "react";

export default function useWindowWidth() {

  const [width, setWidth] = useState<number>( 0);

  useEffect(() => {
    let isMounted = true;

    const handleResize = () => {
      if (isMounted) {
        setWidth(window.innerWidth);
      }
    };

    if (typeof window !== "undefined") {
      handleResize(); // Initial width

      window.addEventListener("resize", handleResize);

      return () => {
        isMounted = false;
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return width;
}