import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import {
  colors,
  borderRadius,
  fontWeights,
  getStylePlaceholder,
  themeColors,
  mediaQueries
} from '../utils/designSystem';
import { getClassNames, getColor } from '../utils/designUtils';
import FlatButton from '@material-ui/core/Button';

/*
 * Allowed colors for button
 * For custom colors, you can either add it to the list
 * or just pass css={{}} to the element for inline styles
 */
const buttonColors = { ...themeColors };
const BaseButtonClass = getClassNames({
  cursor: 'pointer',
  height: '48px',
  fontFamily: 'Circular, sans-serif',
  fontWeight: fontWeights.normal,
  textTransform: 'none',
  textAlign: 'center',
  fontSize: '16px',
  boxShadow: 'rgba(150, 165, 190, 0.5) 0px 0px 5px 0',
  boxSizing: 'border-box',
  ':hover': {
    boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
    transform: 'translateY(-1px)'
  },
  [mediaQueries.phone]: {
    height: '40px'
  }
});

const ButtonProps = props => {
  const acceptedColors = Object.keys(buttonColors);
  const conditionalStyles = getStylePlaceholder({
    color: colors.Eggshell,
    backgroundColor: getColor(buttonColors.default),
    borderColor: getColor(buttonColors.default)
  });

  // Check whether to inverse colors or not
  const isInverse = props.hasOwnProperty('inverse') && props.inverse;

  // Colors
  for (const t of acceptedColors) {
    if (props.hasOwnProperty(t) && props[t] && buttonColors.hasOwnProperty(t)) {
      conditionalStyles.color = isInverse
        ? getColor(buttonColors[t])
        : colors.Eggshell;
      conditionalStyles.backgroundColor = isInverse
        ? colors.Eggshell
        : getColor(buttonColors[t]);
      conditionalStyles.borderColor = getColor(buttonColors[t]);

      if (getColor(buttonColors[t], 'DARK')) {
        conditionalStyles[':hover'] = {
          backgroundColor: getColor(buttonColors[t], 'DARK'),
          color: colors.Eggshell
        };
      }
      break;
    }
  }

  // Size
  if (props.hasOwnProperty('fullWidth') && props.fullWidth) {
    conditionalStyles.width = '100%';
  }

  if (props.hasOwnProperty('borderRadius') && props.borderRadius) {
    conditionalStyles.borderRadius = borderRadius[props.borderRadius];
  }
  return conditionalStyles;
};

export default class Button extends Component {
  static propTypes = {
    /** If `true`, primary color is applied to the button */
    primary: PropTypes.bool,
    /** If `true`, primaryTeal color is applied to the button */
    primaryTeal: PropTypes.bool,
    /** If `true`, secondary color is applied to the button */
    secondary: PropTypes.bool,
    /** If `true`, warn color is applied to the button */
    warn: PropTypes.bool,
    /** If `true`, danger color is applied to the button */
    danger: PropTypes.bool,
    /** If `true`, info color is applied to the button */
    info: PropTypes.bool,
    /** If `true`, orange color is applied to the button */
    orange: PropTypes.bool,
    /** Applied by default */
    default: PropTypes.bool,
    /** Makes the button take the size of the container when `true` */
    fullWidth: PropTypes.bool,
    /** Reverse the text and background colors when `true` */
    inverse: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    /** Custom css for button */
    css: PropTypes.object,
    /** Renders material UI button instead of HTML when `true` */
    mui: PropTypes.bool,
    /** Manage the border radius of the button from 2px to 10px */
    // borderRadius: PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'none']),
    holiday: PropTypes.bool
  };

  static defaultProps = {
    css: {},
    mui: false,
    inverse: false,
    fullWidth: false
  };

  render() {
    const { css, children, mui, ...props } = this.props;
    const otherProps = omit(this.props, [
      'css',
      'children',
      'primary',
      'secondary',
      'warn',
      'danger',
      'info',
      'fullWidth',
      'inverse',
      'mui',
      'primaryTeal',
      'blue',
      'holiday'
    ]);
    const buttonProps = {
      className: `${BaseButtonClass} ${getClassNames(
        ButtonProps(props)
      )} ${getClassNames(css)}`
    };
    return mui ? (
      <FlatButton variant={'flat'} {...buttonProps} {...otherProps}>
        {children}
      </FlatButton>
    ) : (
      <button {...buttonProps} {...otherProps}>
        {children}
      </button>
    );
  }
}
