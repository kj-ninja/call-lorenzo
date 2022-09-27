import { useEffect, useState } from "react";

const useCheckScroll = () => {
  const [bar, setBar] = useState(false);

  const changeBar = () => {
    window.scrollY >= 25 ? setBar(true) : setBar(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBar);
    return () => {
      window.removeEventListener('scroll', changeBar);
    };
  }, []);

  return { bar };
}

export default useCheckScroll;
