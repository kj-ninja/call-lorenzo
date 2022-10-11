import { Fragment, useContext } from "react";
import {
  UpperLine,
  LowerLine
} from "./styles";
import { LanguageContext } from "../../context/language-context";

const Footer = () => {
  const { setLanguage, dictionary } = useContext(LanguageContext);
  console.log("choosed dict: ", dictionary)

  return (
    <Fragment>
      <UpperLine />
      <LowerLine>
        <div className='lower-line-container'>
          <button onClick={() => setLanguage("pl")}>Polski</button>
          <button onClick={() => setLanguage("en")}>Angielski</button>
        </div>
      </LowerLine>
    </Fragment>
  )
}

export default Footer;
