import {NativeHelper} from './constains';

export const Colors = {
  Blue: '#4286f5',
  Gray: '#808080',
  StrongGray: '#777777',
  RedPink: '#fe4648',
  White: '#fff',
  Black: '#000',
  AliceBlue: '#f6f8fa',
  LightBlue: '#e8eeff',
  RedStrong: '#F44336',
  GrayBorder: '#ddd'
};

export const Size = {
  BottomHeight: (NativeHelper.ViewportHeight - 56) * .15
};

export const AppImage = {
  Logo: require('../../assets/images/logo.png'),
  TutorialImages: [
    require('../../assets/images/tut01.png'),
    require('../../assets/images/tut02.png'),
    require('../../assets/images/tut03.png'),
    require('../../assets/images/tut04.png'),
    require('../../assets/images/tut05.png'),
    require('../../assets/images/tut06.png')
  ]
};

