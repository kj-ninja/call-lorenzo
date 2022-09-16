import {
  ITile,
  IPricing,
  IAdditionalFees,
  IPaymentMethod,
  ICostText,
  IWhenWeWork,
  IContactUs,
  IOurOfferTile,
  IOurOfferToggle,
  IWhoWeAreFirstParagraph,
  IWhoWeAreSecondParagraph,
  IWhoWeAreShortTexts,
  IAdditionalInfo
} from "../types";

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
  HowToContactUs: {
    texts: IContactUs;
  }
  WhatIsOurOffer: {
    title: string;
    toggleText: IOurOfferToggle;
    tileTexts: IOurOfferTile[];
  },
  WhoWeAre: {
    shortTexts: IWhoWeAreShortTexts;
    firstTextContainer: IWhoWeAreFirstParagraph;
    secondTextContainer: IWhoWeAreSecondParagraph;
  },
  AdditionalInfo: {
    additionalTexts: IAdditionalInfo;
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
  WhatIsOurOffer: {
    title: "Jaka jest nasza oferta?",
    toggleText: {
      show: "rozwiń",
      hide: "zwiń"
    },
    tileTexts: [
      {
        tileTitle: "KIEROWCA ZASTĘPCZY",
        tileOrder: "1.",
        tileText: "Przyjechałeś swoim samochodem na imprezę, ale ze względu na spożyty alkohol nie możesz " +
          "wrócić do domu?",
        tileDescription: "Bezpiecznie odwieziemy Cię do domu twoim samochodem,\n" +
          "tak żebyś spokojnie zaczął kolejny dzień." ,
        tileBoldText: "Zamów surrogate driver na terenie Wrocławia i okolic."
      },
      {
        tileTitle: "PRYWATNY KIEROWCA",
        tileOrder: "2.",
        tileText: "Potrzebujesz kierowcy, który bezpiecznie\n" +
          "poprowadzi Twój samochód?",
        tileDescription: "Jesteśmy gotowi na wszelkie zlecenia. Podróże nie muszą\n" +
          "wymagać zatrudnienia osobnego kierowcy, zlecenia mogą\n" +
          "być realizowane przez nas doraźnie.",
        tileBoldText: ""
      },
      {
        tileTitle: "ODWOŻENIE SAMOCHODU NA SERWIS/MYJNIĘ",
        tileOrder: "3.",
        tileText: "Posiadasz kilka samochodów i nie masz czasu na ich\n" +
          "obsługę oraz potrzebujesz kogoś, kto zadba\n" +
          "o firmową flotę?",
        tileDescription: "Oferujemy usługi outsourcingowe w zakresie obsługi\n" +
          "samochodów, skupiające się na odprowadzeniu pojazdu\n" +
          "na serwis,myjnię oraz w inne miejsce, w które tylko\n" +
          "potrzebujesz.",
        tileBoldText: ""
      },
      {
        tileTitle: "RELOKACJA SAMOCHODÓW",
        tileOrder: "4.",
        tileText: "Potrzebujesz przetransportować samochód między\n" +
          "dwiema lokalizacjami?",
        tileDescription: "Realizujemy zlecenia w zakresie relokacji pojazdów\n" +
          "między umówionymi miejscami.",
        tileBoldText: ""
      },
      {
        tileTitle: "KURIER EKSPRESOWY",
        tileOrder: "5.",
        tileText: "Potrzebujesz kierowcy, który niezwłocznie wsiądzie\n" +
          "do samochodu i dostarczy twoją przesyłkę we wskazane\n" +
          "miejsce?",
        tileDescription: "Oferujemy kierowcę „na już” który z Wrocławia i okolic\n" +
          "dojedzie gdzie tylko potrzebujesz w jak najszybszym\n" +
          "czasie.",
        tileBoldText: ""
      },
    ]
  },
  WhoWeAre: {
    shortTexts: {
      title: "Kim jesteśmy?",
      source: "Żródło: www.pzm.pl"
    },
    firstTextContainer: {
      colorTextSentences: "Jesteśmy młodym zespołem kierowców, którzy posiadają duże doświadczenie, za kierownicą.",
      standardText: "Prowadziliśmy szeroką gamę samochodów, co przekłada się na zapewnieniu Państwu jak najlepiej " +
        "wykonywanych przez nas usług."
    },
    secondTextContainer: {
      colorText: "Nasze umiejętności poparte są ",
      firstStandardText: "kursami doskonalenia techniki jazdy takimi jak ",
      firstBoldText: "Ford Driving Skills for Life. ",
      secondStandardText: "Jednocześnie jesteśmy finalistami konkursu ",
      secondBoldText: "„Najbezpieczniejszy Młody Kierowca” ",
      thirdStandardText: "w roku 2020 oraz 2021, organizowanego przez ",
      thirdBoldText: "Polski Związek Motorowy.",
    }
  },
  AdditionalInfo: {
    additionalTexts: {
      colouredWords: "Odznaczamy się ",
      firstParagraph: "wysoką kulturą osobistą, poufnością,odpowiedzialną i bezpieczną jazdą, a także wiedzą z zakresu" +
        " udzielania pierwszej pomocy.",
      firstLineText: "BEZPIECZEŃSTWO",
      secondLineText: "PROFESJONALIZM",
      thirdLineText: "NIEZAWODNOŚĆ",
      fourthLineText: "KOMFORT",
      colouredSentence: "Jako firma, stawiamy na:",
      colouredParagraph: "Staramy się zapewnić Państwu usługi na najwyższym możliwym poziomie"
    }
  },
  Footer: {
    text: "Regulamin",
  },
};
