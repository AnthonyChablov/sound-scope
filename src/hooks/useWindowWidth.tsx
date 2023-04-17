import { useState, useEffect } from "react";

export default function useWindowWidth() {

  const [width, setWidth] = useState(0);
  
  useEffect(() => {

      function handleResize(){
        setWidth(window.innerWidth);
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return width;
}