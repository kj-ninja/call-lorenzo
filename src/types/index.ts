// How are we doing
export interface ITile {
  description: string | null;
  icon: string | null;
}

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

// general
export type KeyString = { [key: string]: string };
