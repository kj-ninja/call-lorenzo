import { useEffect, useState } from "react";

const useCheckScroll = () => {
  const [scrollOnFirstScreen, setScrollOnFirstScreen] = useState(false);

  const changeBar = () => {
    window.scrollY >= 500 ? setScrollOnFirstScreen(true) : setScrollOnFirstScreen(false);
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
