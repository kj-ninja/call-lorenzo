import { useEffect, useState } from "react";

const useCheckScroll = () => {
  const [scrollOnFirstScreen, setScrollOnFirstScreen] = useState(false);

  const changeBar = () => {
    if (window.scrollY >= 120) {
      setScrollOnFirstScreen(true)
    }
    if (window.scrollY <= 70) {
      setScrollOnFirstScreen(false)
    }
    // window.scrollY >= 150 ? setScrollOnFirstScreen(true) : setScrollOnFirstScreen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBar);
    return () => {
      window.removeEventListener('scroll', changeBar);
    };
  }, []);

  return { scrollOnFirstScreen };
}

export default useCheckScroll;
