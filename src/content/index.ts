import {ITile} from "../types";

interface IContent {
  header: {
    title: string;
    navigation: string[];
  };
  howAreWeDoing: {
    tiles: ITile[];
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
  }
};