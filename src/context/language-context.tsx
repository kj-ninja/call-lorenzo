import { createContext, ReactNode, useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../services/getDataFromLocalStorage";

interface IContentContext {
  language: string;
  setLanguage: (language: string) => void;
}

interface Props {
  children: ReactNode
}

export const LanguageContext = createContext<IContentContext>({
  language: "",
  setLanguage: () => {}
});

export const LangContext = ({children}: Props) => {
  const [language, setLanguage] = useState(getDataFromLocalStorage());

  useEffect(() => {
      localStorage.setItem('lang', JSON.stringify(language));
  }, [language]);

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}


