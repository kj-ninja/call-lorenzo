import { StyledWhenWeWork } from "./styles";
import driver from "../../assets/driver.svg";

const WhenWeWork = () => {
  return (
    <StyledWhenWeWork>
      <h2>Kiedy Pracujemy?</h2>
      <div className="container">
        <div>
          <span>Codziennie 18:00 - 1:00*</span>
        </div>
        <img src={driver} alt="My Happy SVG"/>
        <div>
          *po wcześniejszym umówieniu, jesteśmy do dyspozycji <span>24/7</span>
        </div>
      </div>
    </StyledWhenWeWork>
  )
}

export default WhenWeWork;
