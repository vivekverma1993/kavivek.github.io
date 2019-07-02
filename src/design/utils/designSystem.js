export const mediaQueries = {
  xs: '@media (max-width: 420px)',
  sm: '@media (min-width: 421px) and (max-width: 767px)',
  small: '@media (max-width: 767px)',
  md: '@media (min-width: 768px) and (max-width: 991px)',
  lg: '@media (min-width: 992px) and (max-width: 1266px)',
  xl: '@media (min-width: 1267px) and (max-width: 1900px)',
  xxl: '@media (min-width: 1901px)',
  phone: '@media (max-width: 500px)',
  tablet: '@media (min-width: 501px) and (max-width: 1000px)',
  desktop: '@media (min-width: 1000px)',
  nonDesktop: '@media (max-width: 999px)',
  nonPhone: '@media (min-width: 501px)'
};

export const muiMediaQueries = { xs: 1, sm: 600, md: 960, lg: 1280 };

export const gridMediaQueries = {
  xs: '@media (min-width: 0px)',
  sm: '@media (min-width: 421px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1267px)',
  xxl: '@media (min-width: 1901px)'
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '14px',
  lg: '24px',
  xl: '48px',
  xxl: '64px'
};

const purple = {
  LIGHTER: '#e5e6f3',
  LIGHT: '#f2f2fa',
  DEFAULT: '#b9a3d9',
  DARK: '#b9a3e0',
  DARKER: '#253a5e'
};

const primaryTeal = {
  DEFAULT: '#638b97',
  DARK: '#7a939c',
  DARKER: '#7da0a9'
};
const teal = {
  DEFAULT: '#6bc1b6',
  DARK: '#7a939c',
  DARKER: '#7da0a9',
  LIGHT: '#65c6c8',
  LIGHTER: '#d7ffff'
};

const grey = {
  LIGHTER: '#f8fafb',
  LIGHTER2: '#f8f8f8',
  LIGHTER3: '#b4b4b4',
  DEFAULT: '#e0e0e0',
  LIGHT: '#9d9d9d',
  DARKER: '#4d4d4d',
  LIGHTER1: '#757575',
  MEDIUM: '#4b4b4b',
  SOLID: '#757575',
  DARK: '#2f394d'
};

const gray = {
  DEFAULT: 'gray',
  LIGHTER: '#f5f5f5',
  LIGHT: '#eff2f2',
  DARK: '#dfe3e6',
  MEDIUM: '#b1b1b1',
  DARKER: '#d5d5d5',
  SOLID: '#c9c9c9',
  DARKEST: '#999',
  APPROX: '#888',
  DOVE: '#6f6f6f',
  LIGHTDUST: '#848484',
  DUSTY: '#979797',
  SHUTTLE: '#5a6870',
  SLATE: '#748995',
  MID: '#565867',
  REGENT: '#879ca3',
  STORM: '#696c79',
  ATHENS: '#dfe2e6',
  PURE: '#8d8d8d'
};

const blue = {
  PRIMARY: '#337ab7',
  DARK: '#23527c',
  FADED: '#53617e',
  MOODY: '#7b6cd1',
  HAVELOCK: '#4a90e2',
  CLOUDY: '#f4f7f9',
  EGG: '#00d8be',
  ROBIN_EGG: '#00bfcc',
  PACIFIC: '#00b3b7',
  PACIFIC_DARK: '#00b4b8',
  ALICE: '#F6FCFF'
};

const brown = {
  LIGHT: '#808080',
  MEDIUM: '#797979',
  DARK: '#2f394d'
};

const orange = {
  DEFAULT: '#ef4d22'
};

// Colors used in specific components but not widely used
export const colors = {
  Mystic: '#DEEAEC',
  GullGray: '#a3b2ba',
  Nevada: '#5d6d77',
  GrayLight1: '#c7c7c7',
  GrayLight2: '#fefefe',
  GrayDark1: '#4a4a4a',
  GreenishDark: '#638b97',
  SlateGray: '#748995',
  GreenLight: '#C1D0D3',
  CorpTeal: '#6bc1b6',
  DullTeal: '#ecf2f1',
  DangerRed: '#a94442',
  Default: '#68738b',
  InfoBlue: '#33cde7',
  WarnYellow: '#ffae56',
  GreyEggShell: '#F3F3F3',
  Eggshell: '#FEFEFE',
  White: '#FFFFFF',
  Black: '#000000',
  FadedBlack: '#4d4d4d',
  YellowOchre: '#f2b200',
  Default2: 'rgba(0,0,140,.05)',
  FadedGreen: '#3fbbad',
  FavoriteRed: '#ea2659',
  FadedWhite: '#eee',
  SuccessGreen: '#5fa60e',
  FailureRed: '#d0021b',
  Peach: '#fff7ef',
  Transparent: 'transparent',
  Shadow: 'rgba(0,0,0,0.1)',
  PinkishGray: '#c5c5c5',
  Greyish: '#b5b5b5',
  WashedGreen: '#65c6c8',
  WhitishGray: '#a4aec3',
  BluishGreen: '#8dc1c9',
  WashedWhite: '#82b5b0',
  Silver: '#cbcbcb',
  whiteOpacityPoint3: 'rgba(255, 255, 255, .3)',
  TerminalNavbar: '#61748a',
  TerminalTopbar: '#ebeff0',
  placeholder: '#ebeff0',
  Albaster: '#f8f8f8',
  Portage: '#9688ea',
  AthensGray: '#f3f5f8',
  CloudyBlue: '#f4f7f9',
  Nobel: '#b4b4b4',
  HeavyMetal: '#1e201d',
  SilverChalice: '#a1a1a1',
  OliveDrab: '#539229',
  Monza: '#d0021b',
  WhiteLilac: '#f6f7fb',
  WildSand: '#F4F4F4',
  Boulder: 'rgb(117, 117, 117)',
  BoulderOpacity: 'rgba(117, 117, 117, 0.5)',
  HeavyMetalOpacity: 'rgba(30, 32, 29, 0.43)',
  LochinvarOpacity: 'rgba(44, 153, 142, 0.15)',
  MineShaft: '#212121',
  Hoki: '#638B97',
  AquaHaze: '#eff3f6',
  Gothic: '#72949d',
  Tundora: '#4a4a4a',
  Emperor: '#4f4f4f',
  Atlantis: '#7cca47',
  VeryFadeBlack: 'rgba(0, 0, 0, 0.04)',
  whiteOpacityPoint6: 'rgba(255, 255, 255, .6)',
  dede: '#dedede',
  eded: '#ededed',
  SubjectListing: 'rgba(223, 227, 230, 0.5)',
  BlackLight: '#757575',
  RegentGray: '#8a979e',
  Alto: '#d9d9d9',
  DustyGray: '#9b9b9b',
  Iron: '#d4dada',
  Salmon: '#ff7b79',
  SilverLight: '#bdbdbd',
  CornflowerBlue: '#00baca',
  OysterBay: 'rgba(211, 255, 255, 0.9)',
  Scorpion: '#5c5c5c',
  LightGray: '#aaaaaa',
  DarkAlto: '#d8d8d8',
  LightAlbaster: '#fbfbfb',
  LightSilver: '#b2b2b2',
  OysterBayHalf: 'rgba(211, 255, 255, 0.6)',
  TradeWind: '#6ac0b6',
  LightEmperor: '#555555',
  Geysor: '#dee3e6',
  Mischka: '#d4d7dd',
  DullLavender: '#a496e9',
  PurpleMountain: '#8677be',
  Silver1: '#A7A7A7',
  PuertoRico: '#3ec5b7',
  MischkaDark: '#d1d6dd',
  Oyster2: '#d3ffff',
  Java: '#21b1b6',
  Heather: '#b5c9ce',
  Silver2: '#cacaca',
  AquaIsland: '#a6cbda',
  Polar: '#eefbfb',
  Silver3: '#A3A3A3',
  StormGray2: '#787b87'
};

const holiday = {
  DEFAULT: '#016d7e',
  DARK: '#607782 '
};

export const holidayColors = {
  DarkSlateBlue: '#2f3456',
  GlowyOrange: '#f54f24',
  Green: '#4e4e4e',
  Gray: '#666666',
  BluishGray: '#607782',
  NightBlue: '#1b0f50',
  HolidayBlue: '#29166b'
};

// Colors used in creating the overall theme of the component
export const themeColors = {
  primary: purple,
  secondary: teal,
  danger: colors.DangerRed,
  warn: colors.WarnYellow,
  info: colors.InfoBlue,
  default: colors.Default,
  defaultColor: colors.Default, // Because sometimes default is a keyword (e.g. for button)
  grey,
  gray,
  blue,
  brown,
  orange,
  teal,
  holiday,
  primaryTeal,
  silver: colors.SilverChalice,
  navBarColor: colors.TerminalNavbar,
  slateGray: gray.slate,
  deepTurquoise: '#016d7e'
};

export const statusColors = {
  pending: colors.YellowOchre,
  sold: colors.FavoriteRed,
  default: colors.SuccessGreen
};

export const fontSizes = {
  xxxs: '9px',
  xxs: '11px',
  xxsPlus: '12px',
  xs: '14px',
  sm: '18px',
  md: '22px',
  lg: '28px',
  xl: '40px',
  xxl: '48px',
  xxxl: '64px',
  xxxxl: '70px'
};

export const borderRadius = {
  lg: '10px',
  md: '8px',
  sm: '4px',
  xs: '2px',
  none: '0px'
};

export const fontWeights = {
  light: 100,
  regular: 300,
  normal: 400,
  semiBold: 500,
  bold: 600
};

export const iconSizes = {
  sm: 28,
  // unused for now, feel free to change
  md: 34,
  // unused for now, feel free to change
  lg: 40
};

export const getStylePlaceholder = (styles = {}) => {
  return {
    ...styles,
    [mediaQueries.xs]: {},
    [mediaQueries.sm]: {},
    [mediaQueries.md]: {},
    [mediaQueries.lg]: {},
    [mediaQueries.xl]: {},
    [mediaQueries.xxl]: {}
  };
};

// Make sure to define in ascending order for specificity
export const navbarHeights = {
  xs: 50,
  sm: 55,
  md: 60
};

export const searchFilterBarHeight = 36;

export const topForFilter = Object.keys(navbarHeights).reduce((obj, key) => {
  obj[key] = navbarHeights[key] + searchFilterBarHeight;
  return obj;
}, {});

export const clientSidebarWidths = {
  xs: 0,
  md: 170
};

export const clientSidebarCollapseWidths = {
  xs: 0,
  md: 85
};

export const sidebarWidths = clientSidebarWidths;
export const sidebarCollapseWidths = clientSidebarCollapseWidths;

export const animationProps = {
  duration: '0.2s',
  fn: 'ease'
};

export const searchPageAnimationProps = {
  duration: '195ms',
  fn: 'cubic-bezier(0.4, 0, 0.6, 1)'
};
