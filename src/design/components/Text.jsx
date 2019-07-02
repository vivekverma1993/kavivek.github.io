import glamorous from 'glamorous';
import {
  fontSizes,
  fontWeights,
  mediaQueries,
  getStylePlaceholder,
  themeColors
} from '../utils/designSystem';
import { getColor } from '../utils/designUtils';

const defaultHeadingSizes = fontSizes;
const mediaXSFontSizes = {
  sm: '12px',
  md: '15px',
  lg: '16px',
  xl: '22px',
  xxl: '23px',
  xxxl: '35px',
  xxxxl: '30px'
};
const mediaSMFontSizes = {
  sm: '14px',
  md: '15px',
  lg: '16px',
  xl: '28px',
  xxl: '34px',
  xxxl: '40px',
  xxxxl: '40px'
};

const mediaMDFontSizes = {
  sm: '18px',
  md: '20px',
  lg: '22px',
  xl: '34px',
  xxl: '40px',
  xxxl: '50px',
  xxxxl: '50px'
};

const fontColors = { ...themeColors };

const headingWeights = fontWeights;
const textTransforms = ['lowercase', 'uppercase', 'capitalize'];
const textAligns = ['left', 'center', 'right', 'justify'];

const Text = glamorous.div(
  {
    fontFamily: 'Circular, sans-serif'
  },
  props => {
    const acceptedSizes = Object.keys(defaultHeadingSizes);
    const acceptedWeights = Object.keys(headingWeights);
    const acceptedColors = Object.keys(fontColors);
    let conditionalStyles = getStylePlaceholder({
      fontWeight: headingWeights.regular
    });

    // Size
    for (const t of acceptedSizes) {
      if (
        props.hasOwnProperty(t) &&
        props[t] &&
        defaultHeadingSizes.hasOwnProperty(t)
      ) {
        const fontSizeObject = {
          fontSize: defaultHeadingSizes[t]
        };

        const fontSizeMediaObject =
          props.hasOwnProperty('fixedSize') && props['fixedSize']
            ? {}
            : {
                [mediaQueries.md]: {
                  fontSize: mediaMDFontSizes[t]
                },
                [mediaQueries.sm]: {
                  fontSize: mediaSMFontSizes[t]
                },
                [mediaQueries.xs]: {
                  fontSize: mediaXSFontSizes[t]
                }
              };
        conditionalStyles = {
          ...conditionalStyles,
          ...fontSizeObject,
          ...fontSizeMediaObject
        };
        break;
      }
    }

    // Weight
    for (const t of acceptedWeights) {
      if (
        props.hasOwnProperty(t) &&
        props[t] &&
        headingWeights.hasOwnProperty(t)
      ) {
        conditionalStyles.fontWeight = headingWeights[t];
        break;
      }
    }

    // Text transform
    for (const t of textTransforms) {
      if (props.hasOwnProperty(t) && props[t]) {
        conditionalStyles.textTransform = t;
        break;
      }
    }

    // Text align
    for (const t of textAligns) {
      if (props.hasOwnProperty(t) && props[t]) {
        conditionalStyles.textAlign = t;
        break;
      }
    }

    // Color
    for (const t of acceptedColors) {
      if (props.hasOwnProperty(t) && props[t] && fontColors.hasOwnProperty(t)) {
        conditionalStyles.color = getColor(fontColors[t]);
        break;
      }
    }

    const isInline = props.hasOwnProperty('inline') && props['inline'];
    if (isInline) {
      conditionalStyles.display = 'inline';
    }

    if (props.hasOwnProperty('pointer') && props['pointer']) {
      conditionalStyles.cursor = 'pointer';
    }

    if (props.hasOwnProperty('verticalCenter') && props['verticalCenter']) {
      conditionalStyles.display = isInline ? 'inline-flex' : 'flex';
      conditionalStyles.alignItems = 'center';
    }

    return conditionalStyles;
  }
);

export default Text;
