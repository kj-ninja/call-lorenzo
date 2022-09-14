import { ITile, IPricing, IAdditionalFees, IPaymentMethod, ICostText, IWhenWeWork } from "../types";

interface IContent {
  header: {
    title: string;
    navigation: string[];
  };
  howAreWeDoing: {
    tiles: ITile[];
  },
  howMuchItCost: {
    prices: IPricing[];
    additionalFees: IAdditionalFees[];
    paymentMethods: IPaymentMethod[];
    texts: ICostText;
  },
  whenWeWork: {
    sectionTexts: IWhenWeWork
  },
  Footer: {
    text: string;
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
  howMuchItCost: {
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
      }
    ],
    texts: {
      title: "Ile to kosztuje?",
      paymentNoteText: "W przypadku gdy, trasa kursu zaczyna się i kończy poza granicami miasta, cena może ulec zmianie.",
      firstPaymentTitle: "! WAŻNE !",
      secondPaymentTitle: "DOSTĘPNE FORMY PŁATNOŚCI"
    }
  },
  whenWeWork: {
    sectionTexts: {
      title: "Kiedy Pracujemy?",
      coreHours: "Codziennie 18:00 - 1:00*",
      description: "*po wcześniejszym umówieniu,",
      description2: "jesteśmy do dyspozycji",
      additionalHours: "24/7"
    }
  },
  HowToContactUs: {
    texts: {
      title: "Jak się z nami skontaktować?",
      firstContactUsTile: "+48 799 269 844",
      secondContactUsTile: "zadzwoń lub napisz",
      firstImportantText: "W przypadku usług we Wrocławiu lub okolic prosimy o kontakt",
      firstBoldText: " min. 1h przed,",
      secondImportantText: " w przypadku innych usług",
      secondBoldText: " min. 1 dzień."
    }
  },
  Footer: {
    text: "Regulamin"
  }
};
