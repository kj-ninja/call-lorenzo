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

// When we work?
export interface IWhenWeWork {
  title: string;
  coreHours: string;
  description: string;
  description2: string;
  additionalHours: string;
}

// How to contact us?
export interface IContactUs {
  title: string;
  firstContactUsTile: string;
  secondContactUsTile: string;
  firstImportantText: string;
  firstBoldText: string;
  secondImportantText: string;
  secondBoldText: string;
}

//What is our offer?
export interface IOurOfferTile {
  tileText: string;
  tileOrder: string;
  tileTitle: string;
  tileDescription: string;
  tileBoldText?: string;
}

export interface IOurOfferToggle {
  show: string;
  hide: string;
}

//Additional Information
export interface IAdditionalInfo {
  colouredWords: string;
  firstParagraph: string;
  colouredSentence: string;
  firstLineText: string;
  secondLineText: string;
  thirdLineText: string;
  fourthLineText: string;
  colouredParagraph: string;
}

// general
export type KeyString = { [key: string]: string };
