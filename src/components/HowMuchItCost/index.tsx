import { useContext } from "react";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import { Container } from "../../styles/styled/Container";
import {
  AdditionalFees,
  ImportantNotes,
  Pricing,
  StyledHowMuchIsIt
} from "./styles";

const HowMuchItCost = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <StyledHowMuchIsIt id={dictionaryList[language].header.navigation[2]}>
        <h2>{dictionaryList[language].howMuchItCost.texts.title}</h2>
        <Pricing language={language}>
          <div className="table">
            {dictionaryList[language].howMuchItCost.prices.map((price, key) => (
              <div key={key} className="table-row">
                <div className='table-row__price-cell'>{price.price}</div>
                <div className='table-row__km-cells'>
                  <div className='table-row__km-cells__text'>{price.additionalCharacter}</div>
                  <div className='table-row__km-cells__text'>{price.km}</div>
                </div>
              </div>
            ))}
          </div>
          <ImportantNotes>
            <span className="payments-title">{dictionaryList[language].howMuchItCost.texts.firstPaymentTitle}</span>
            <span>{dictionaryList[language].howMuchItCost.texts.paymentNoteText}</span>
          </ImportantNotes>
        </Pricing>

        <AdditionalFees>
          <div>
            {dictionaryList[language].howMuchItCost.additionalFees.map((fee, key) => (
              <div key={key} className="table-row">
                <div className="table-row-text-wrapper">
                  <div className="table-row__text-style">{fee.feesText}</div>
                  <div>{fee.feesDescription}</div>
                </div>
                <div className="table-row-fees-style">{fee.feesValue}</div>
              </div>
            ))}
          </div>
          <ImportantNotes className="important-notes">
            <span className="payments-title">{dictionaryList[language].howMuchItCost.texts.secondPaymentTitle}</span>
            <div className='payment-methods'>
              {dictionaryList[language].howMuchItCost.paymentMethods.map((method, key) => (
                <span key={key}>-{method.method}</span>
              ))}
            </div>
          </ImportantNotes>
        </AdditionalFees>
      </StyledHowMuchIsIt>
    </Container>

  )
}

export default HowMuchItCost;
