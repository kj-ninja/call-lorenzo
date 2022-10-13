import { createContext, ReactNode, useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../services/getDataFromLocalStorage";
// import {dictionaryList} from "../content/dictionaryList";
// import { IContent } from "../types";

interface IContentContext {
  language: string;
  setLanguage: (language: string) => void;
  // dictionary: IContent;
}

interface Props {
  children: ReactNode
}

export const LanguageContext = createContext<IContentContext>({
  // dictionary: dictionaryList.pl,
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


