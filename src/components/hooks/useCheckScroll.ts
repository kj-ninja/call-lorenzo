import { useEffect, useState } from "react";

const useCheckScroll = () => {
  const [scrollOnFirstScreen, setScrollOnFirstScreen] = useState(false);
  const [scrollBack, setScrollBack] = useState(false)

  const changeBar = () => {
    if (window.scrollY >= 120) {
      setScrollOnFirstScreen(true)
    }
    if (window.scrollY <= 70) {
      setScrollOnFirstScreen(false)
    }
    if (window.scrollY === 0) {
      setScrollBack(true)
    }
    else {
      setScrollBack(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBar);
    return () => {
      window.removeEventListener('scroll', changeBar);
    };
  }, []);

  return { scrollOnFirstScreen, scrollBack };
}

export default useCheckScroll;
