import styled from "styled-components";
import { IDevice } from "../../settings/media";

type IPriceProps = {
  language: string;
}

export const StyledHowMuchIsIt = styled.section`
  display: flex;
  flex-direction: column;
  line-height: ${(props) => (props.theme.additionalStyles.lineHeight)};
  margin-top: 10px;

  @media only screen and ${IDevice.desktopXS} {
    margin-top: 20px;
  }
  
  h2 {
    margin: 0 0 20px 0;
    height: ${props => props.theme.additionalStyles.heightTitle};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.theme.additionalStyles.borderTitle};
    border-top: ${props => props.theme.additionalStyles.borderTitle};
  }
`
export const Pricing = styled.div<IPriceProps>`
  width: 80%;
  align-self: flex-start;
  margin-top: 14px;

  @media only screen and ${IDevice.desktopXS} {
    width: 100%;
  }
  .table > div:first-of-type {
   border-radius: 0 10px 0 0;

    @media only screen and ${IDevice.desktopXS} {
      border-radius: 0 0 0 0;
    }
  }
  
  .table > div:last-of-type {
    border-radius: 0 0 10px 0;

    @media only screen and ${IDevice.desktopXS} {
      border-radius: 0 0 10px 10px;
    }
  }
  
  .table-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid black;
    background-color: ${(props) => props.theme.colors.secondaryColor};

    @media only screen and ${IDevice.desktopXS} {
      padding: 8px 0;
    }
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
    width: ${props => (props.language === "pl") ? "75px" : "100px"}
  }
  
  .table-row__km-cells__text {
    font-weight: bolder;
  }

  @media only screen and ${IDevice.desktopXS} {
    align-self: center;
    margin-bottom: 20px;
  }
`;

export const AdditionalFees = styled.div`
  width: 80%;
  align-self: flex-end;
  margin-top: 10px;

  @media only screen and ${IDevice.desktopXS} {
    width: 600px;
  }
  
  > div div:first-of-type {
    border-radius: 10px 0 0 0;

    @media only screen and ${IDevice.desktopXS} {
      border-radius: 10px 10px 0 0;
    }
  }
  
  > div div:last-of-type {
    border-radius: 0 0 0 10px;

    @media only screen and ${IDevice.desktopXS} {
      border-radius: 0 0 10px 10px;
    }
  }
  
  .table-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2px 0;
    border-bottom: 1px solid black;
    background-color: ${(props) => props.theme.colors.secondaryColor};

    @media only screen and ${IDevice.desktopXS} {
      padding: 8px 0;
    }
  }
  
  .table-row-text-wrapper {

    @media only screen and ${IDevice.desktopXS} {
      width: 50%;
      display: flex;
    }
  }

  .table-row:last-child {
    border-bottom: none;
  }

  .table-row__text-style {
    width: 155px;
    font-weight: bold;
    margin-right: 4px;
  }
  
  .table-row-fees-style {
    width: 60px;
    text-align: right;
  }

  @media only screen and ${IDevice.desktopXS} {
    align-self: center;
  }
`;

export const ImportantNotes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 15px 0;
  padding: 5px;
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
