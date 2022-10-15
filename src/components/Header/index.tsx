import { useContext } from "react";
import Navbar from "../Navbar";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import StyledHeader from "./styles";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <StyledHeader>
      <h1>{dictionaryList[language as keyof typeof dictionaryList].header.title}</h1>
      <Navbar navigation={dictionaryList[language as keyof typeof dictionaryList].header.navigation} />
    </StyledHeader>
  );
};

export default Header;
