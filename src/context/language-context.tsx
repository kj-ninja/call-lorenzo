import { createContext, ReactNode, useState } from "react";
import {dictionaryList} from "../content/dictionaryList";
import { IContent } from "../types";

interface IContentContext {
  language: string;
  setLanguage: (language: string) => void;
  dictionary: IContent;
}

export const LanguageContext = createContext<IContentContext>({
  dictionary: dictionaryList.pl,
  language: "pl",
  setLanguage: () => {}
});

interface Props {
  children: ReactNode
}

export const LangContext = ({children}: Props) => {
  const [language, setLanguage] = useState("pl");


  const value = { language, setLanguage, dictionary: dictionaryList[language]};

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}


