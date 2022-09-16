import { content } from "../../content";
import { Container } from "../../styles/styled/Container";
import {
  AdditionalFees,
  ImportantNotes,
  Pricing,
  StyledHowMuchIsIt
} from "./styles";

const HowMuchItCost = () => {
  const { prices,additionalFees, paymentMethods, texts } = content.howMuchItCost;

  return (
    <Container>
      <StyledHowMuchIsIt>
        <h2>{texts.title}</h2>
        <Pricing>
          <div className="table">
            {prices.map((price) => (
              <div className="table-row">
                <div className='table-row__price-cell'>{price.price}</div>
                <div className='table-row__km-cells'>
                  <div className='table-row__km-cells__text'>{price.additionalCharacter}</div>
                  <div className='table-row__km-cells__text'>{price.km}</div>
                </div>
              </div>
            ))}
          </div>
          <ImportantNotes>
            <span className="payments-title">{texts.firstPaymentTitle}</span>
            <span>{texts.paymentNoteText}</span>
          </ImportantNotes>
        </Pricing>

        <AdditionalFees>
          <div>
            {additionalFees.map((fee) => (
              <div className="table-row">
                <div>
                  <div className="table-row__text-style">{fee.feesText}</div>
                  <div>{fee.feesDescription}</div>
                </div>
                <div>{fee.feesValue}</div>
              </div>
            ))}
          </div>
          <ImportantNotes className="important-notes">
            <span className="payments-title">{texts.secondPaymentTitle}</span>
            <div className='payment-methods'>
              {paymentMethods.map((method) => (
                <span>-{method.method}</span>
              ))}
            </div>
          </ImportantNotes>
        </AdditionalFees>
      </StyledHowMuchIsIt>
    </Container>

  )
}

export default HowMuchItCost;
