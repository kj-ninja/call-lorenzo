import { content } from "../../content";
import { AdditionalFees, ImportantNotes, Pricing, StyledHowMuchIsIt } from "./styles";

const HowMuchIsIt = () => {
  const { prices,additionalFees } = content.howMuchIsIt;

  return (
    <StyledHowMuchIsIt>
      <h2>Ile to kosztuje?</h2>

      <Pricing>
        <div>
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
          <span className="text-margin">! WAŻNE !</span>
          <span>W przypadku gdy, trasa kursu zaczyna się i kończy poza granicami miasta, cena może ulec zmianie</span>
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
        <ImportantNotes>
          <span className="text-margin">DOSTĘPNE FORMY PŁATNOŚCI</span>
          <span>- BLIK -gotówka -przelew bankowy</span>
        </ImportantNotes>
      </AdditionalFees>

    </StyledHowMuchIsIt>
  )
}

export default HowMuchIsIt;
