import { Fragment } from "react";
import {
  UpperLine,
  LowerLine
} from "./styles";
import { content } from "../../content";

const Footer = () => {
  const { text } = content.Footer;

  return (
    <Fragment>
      <UpperLine />
      <LowerLine>{text}</LowerLine>
    </Fragment>
  )
}

export default Footer;
