// How are we doing?
export interface ITile {
  description: string | null;
  icon: string | null;
}

// How Much It Cost?
export interface IPricing {
  price: number | string;
  additionalCharacter: string;
  km: number | string;
}

export interface IAdditionalFees {
  feesText: string;
  feesDescription: string;
  feesValue: string;
}

export interface IPaymentMethod {
  method: string;
}

export interface ICostText {
  title: string;
  paymentNoteText: string;
  firstPaymentTitle: string;
  secondPaymentTitle: string;
}

// general
export type KeyString = { [key: string]: string };
