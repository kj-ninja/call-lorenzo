import { ITile, IPricing, IAdditionalFees, IPaymentMethod } from "../types";

interface IContent {
  header: {
    title: string;
    navigation: string[];
  };
  howAreWeDoing: {
    tiles: ITile[];
  },
  howMuchIsIt: {
    prices: IPricing[];
    additionalFees: IAdditionalFees[];
    paymentMethods: IPaymentMethod[];
  }
}

export const content: IContent = {
  header: {
    title: 'Call Lorenzo',
    navigation: [
      'USŁUGI',
      'GODZINY PRACY',
      'CENNIK',
      'KONTAKT',
      'O NAS'
    ]
  },
  howAreWeDoing: {
    tiles: [
      {
        description: 'jedziesz na imprez swoim samochodem',
        icon: null,
      },
      {
        description: null,
        icon: 'Auto'
      },
      {
        description: null,
        icon: 'Kieliszki'
      },
      {
        description: 'dobrze się bawisz popijając alkohol',
        icon: null,
      },
      {
        description: 'dzwonisz lub piszesz do nas 1h przed wyjściem',
        icon: null,
      },
      {
        description: null,
        icon: 'Telefon'
      },
      {
        description: null,
        icon: 'Auto'
      },
      {
        description: 'bezpiecznie wracasz do domu swoim samochodem',
        icon: null,
      },
    ],
  },
  howMuchIsIt: {
    prices: [
      {
        price: "80 zł",
        additionalCharacter: "do",
        km: "5 km"
      },
      {
        price: "100 zł",
        additionalCharacter: "do",
        km: "10 km"
      },
      {
        price: "120 zł",
        additionalCharacter: "do",
        km: "20 km"
      },
      {
        price: "160 zł",
        additionalCharacter: "do",
        km: "30 km"
      },
      {
        price: "200 zł",
        additionalCharacter: "do",
        km: "40 km"
      },
      {
        price: "240 zł",
        additionalCharacter: "do",
        km: "50 km"
      },
      {
        price: "wycena indywidualna",
        additionalCharacter: ">",
        km: "50 km"
      },
    ],
    additionalFees: [
      {
        feesText: "pierwsze 10 min",
        feesDescription: "oczekiwania na klienta",
        feesValue: "0 zł"
      },
      {
        feesText: "każde kolejne 10 min",
        feesDescription: "oczekiwania",
        feesValue: "+ 10 zł"
      }
    ],
    paymentMethods: [
      {
        method: "BLIK"
      },
      {
        method: "gotówka"
      },
      {
        method: "przelew bankowy"
      },
    ]
  }
};
