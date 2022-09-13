import styled from "styled-components";
import breakpoint from "../../settings/media";

export const StyledHowMuchIsIt = styled.section`
  display: flex;
  flex-direction: column;
  
  h2 {
    text-align: center;
  }
`

export const Pricing = styled.div`
  width: 80%;
  align-self: flex-start;
  margin-top: 15px;
  
  .table-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid black;
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }
  
  .table-row:last-child {
    border-bottom: none;
  }
  
  .table-row__price-cell {
    width: 50px;
  }
  .table-row__km-cells {
    display: flex;
    justify-content: space-between;
    width: 75px;
  }
  
  .table-row__km-cells__text {
    font-weight: bolder;
  }

  @media only screen and ${breakpoint.IDevice.desktopXS} {
    align-self: center;
    width: 45%;
    margin-bottom: 20px;
  }
`;

export const AdditionalFees = styled.div`
  width: 80%;
  align-self: flex-end;
  margin-top: 15px;

  .table-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid black;
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }

  .table-row:last-child {
    border-bottom: none;
  }

  .table-row__text-style {
    font-weight: bold;
  }

  @media only screen and ${breakpoint.IDevice.desktopXS} {
    align-self: center;
    width: 45%;
  }
`;

export const ImportantNotes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  padding: 10px;
  border: 3px solid ${(props) => props.theme.colors.secondaryColor};

  .payments-title {
    margin-bottom: 5px;
  }
  
  .payment-methods {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    span {
      margin-right: 2px;
      font-size: 12px;
    }
  }
`;