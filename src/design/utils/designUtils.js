import {
  mediaQueries,
  gridMediaQueries,
  navbarHeights,
  muiMediaQueries,
  sidebarWidths,
  sidebarCollapseWidths,
  animationProps,
  searchPageAnimationProps,
  statusColors,
  topForFilter
} from './designSystem';
import { css } from 'glamor';
import classnames from 'classnames';
import { reduce as hashReduce, has as hasKey } from 'lodash';

export const applyOnDesktop = styles => ({ [mediaQueries.desktop]: styles });
export const applyExceptDesktop = styles => ({
  [mediaQueries.nonDesktop]: styles
});

export const applyOnMobile = styles => ({ [mediaQueries.phone]: styles });
export const applyExceptMobile = styles => ({
  [mediaQueries.nonPhone]: styles
});

export const hideOnDesktop = applyOnDesktop({ display: 'none' });
export const hideBelowDesktop = applyExceptDesktop({ display: 'none' });

export const hideOnMobile = applyOnMobile({ display: 'none' });
export const hideAboveMobile = applyExceptMobile({ display: 'none' });

export const getClassNames = (styles = {}) => {
  const glamorStyles = css({
    '&&': { ...styles }
  });

  return classnames(glamorStyles.toString());
};

export const getObjectClassNames = (styles = {}) =>
  hashReduce(
    styles,
    (reducedStyles, style, key) => {
      reducedStyles[key] = getClassNames(style);
      return reducedStyles;
    },
    {}
  );

export const getColor = (color, shade = 'DEFAULT') => {
  if (typeof color === 'object') {
    return color[shade];
  }
  return color;
};

export const getStatusColor = (status = 'default') => {
  return statusColors[status] || statusColors.default;
};

const getMUIMediaStyles = (styleLib, property) => {
  const styles = {};
  Object.keys(styleLib).map(size => {
    styles[`@media (min-width: ${muiMediaQueries[size]}px)`] = {
      [property]: styleLib[size]
    };
    return true;
  });
  return styles;
};

export const navBarMediaHeights = getMUIMediaStyles(navbarHeights, 'height');
export const navBarMediaMinHeights = getMUIMediaStyles(
  navbarHeights,
  'minHeight'
);

export const topForFilterMedia = getMUIMediaStyles(topForFilter, 'top');
export const appWrapperTop = getMUIMediaStyles(navbarHeights, 'marginTop');
export const notesBottomHeights = getMUIMediaStyles(navbarHeights, 'bottom');

export const appWrapperPaddingTop = getMUIMediaStyles(
  navbarHeights,
  'paddingTop'
);

export const appWrapperMarginTop = getMUIMediaStyles(
  navbarHeights,
  'marginTop'
);

const rawListingContainerHeights = getMUIMediaStyles(navbarHeights, 'height');

export const listingContainerHeights = Object.keys(
  rawListingContainerHeights
).reduce((obj, key) => {
  obj[key] = {};
  obj[key]['height'] = `calc(100vh - ${
    rawListingContainerHeights[key]['height']
  }px)`;
  return obj;
}, {});

export const sidebarLeft = getMUIMediaStyles(sidebarWidths, 'left');
export const sidebarWidth = getMUIMediaStyles(sidebarWidths, 'width');
export const sidebarCollapseWidth = getMUIMediaStyles(
  sidebarCollapseWidths,
  'width'
);
export const sidebarCollapseLeft = getMUIMediaStyles(
  sidebarCollapseWidths,
  'left'
);

const getAppWidth = styleLib => {
  const styles = {};
  Object.keys(styleLib).map(size => {
    styles[`@media (min-width: ${muiMediaQueries[size]}px)`] = {
      width: `calc(100% - ${styleLib[size]}px)`
    };
    return true;
  });
  return styles;
};

export const appWidthWithSidebar = getAppWidth(sidebarWidths);
export const appWidthWithSidebarCollapsed = getAppWidth(sidebarCollapseWidths);

const getHalfRight = styleLib => {
  /*
   * This function returns the right for the components
   * that are to be rendered on the search results
   * on the search page
   */
  const styles = {};
  Object.keys(styleLib).map(size => {
    styles[`@media (min-width: ${muiMediaQueries[size]}px)`] = {
      right: `calc(50% - ${styleLib[size] / 2}px)`
    };
    return true;
  });
  return styles;
};

/*
 * This defines the property right of the components
 * on the map when the sidebar is open
 */
export const halfRightWithSidebar = getHalfRight(sidebarWidths);

/*
 * This defines the property right of the components
 * on the map when the sidebar is collapsed
 */
export const halfRightWithSidebarCollapsed = getHalfRight(
  sidebarCollapseWidths
);

const getHalfLeft = styleLib => {
  /*
   * This function returns the left for the components
   * that are to be rendered on the map
   * on the search page
   */
  const styles = {};
  Object.keys(styleLib).map(size => {
    styles[`@media (min-width: ${muiMediaQueries[size]}px)`] = {
      left: `calc(50% + ${styleLib[size] / 2}px)`
    };
    return true;
  });
  return styles;
};

/*
 * This defines the property left of the components
 * on the map when the sidebar is open
 */
export const halfLeftWithSidebar = getHalfLeft(sidebarWidths);

/*
 * This defines the property left of the components
 * on the map when the sidebar is collapsed
 */
export const halfLeftWithSidebarCollapsed = getHalfLeft(sidebarCollapseWidths);

const getQuarterRight = styleLib => {
  /*
   * This function returns the left for the components
   * that are to be rendered on the map
   * on the search page
   */
  const styles = {};
  Object.keys(styleLib).map(size => {
    styles[`@media (min-width: ${muiMediaQueries[size]}px)`] = {
      right: `calc(75% - ${styleLib[size] * 0.75}px)`
    };
    return true;
  });
  return styles;
};

/*
 * This defines the property left of the components
 * on the map when the sidebar is open
 */
export const quarterRightWithSidebar = getQuarterRight(sidebarWidths);

/*
 * This defines the property left of the components
 * on the map when the sidebar is collapsed
 */
export const quarterRightWithSidebarCollapsed = getQuarterRight(
  sidebarCollapseWidths
);

const getQuarterLeft = styleLib => {
  /*
   * This function returns the left for the components
   * that are to be rendered on the map
   * on the search page
   */
  const styles = {};
  Object.keys(styleLib).map(size => {
    styles[`@media (min-width: ${muiMediaQueries[size]}px)`] = {
      left: `calc(25% + ${styleLib[size] * 0.75}px)`
    };
    return true;
  });
  return styles;
};

/*
 * This defines the property left of the components
 * on the map when the sidebar is open
 */
export const quarterLeftWithSidebar = getQuarterLeft(sidebarWidths);

/*
 * This defines the property left of the components
 * on the map when the sidebar is collapsed
 */
export const quarterLeftWithSidebarCollapsed = getQuarterLeft(
  sidebarCollapseWidths
);

export const appHeight = (styleLib => {
  /*
   * This function defines the height of the app
   * except the navbar
   */
  const styles = {};
  Object.keys(styleLib).map(size => {
    styles[`@media (min-width: ${muiMediaQueries[size]}px)`] = {
      height: `calc(100vh - ${styleLib[size]}px)`
    };
    return true;
  });
  return styles;
})(navbarHeights);

export const displayOnHover = className =>
  getClassNames({
    [`&:hover .${className}`]: {
      display: 'block'
    }
  });

export const navigationSearchBarWidths = getClassNames({ width: '75%' });

export const animation = props => (property = 'all') =>
  `${property} ${props.duration} ${props.fn}`;

export const animationFn = animation(animationProps);
export const searchPageAnimationFn = animation(searchPageAnimationProps);

export const imgixImageSizes = { small: 180, medium: 320, large: 600 };

const translateHash = (object, translation) => {
  return hashReduce(
    object,
    (newObject, value, key) => {
      if (hasKey(translation, key)) {
        return { ...newObject, [translation[key]]: value };
      }
      return { ...newObject, [key]: value };
    },
    {}
  );
};

export const withMediaQuery = object => {
  return translateHash(object, mediaQueries);
};

export const getClassWithMediaQuery = object => {
  const translated = withMediaQuery(object);
  return getClassNames(translated);
};

export const withGridQuery = object => {
  return translateHash(object, gridMediaQueries);
};

export const getClassWithGridQuery = object => {
  const translated = withMediaQuery(object);
  return getClassNames(translated);
};

export const navbarBoxShadow = getClassNames({
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 2px'
});

export const aboveSingleViewBreakPoint = {
  [mediaQueries.xs]: {
    display: 'none !important'
  },
  [mediaQueries.sm]: {
    display: 'none !important'
  },
  [mediaQueries.md]: {
    display: 'none !important'
  }
};

export const belowSingleViewBreakPoint = {
  display: 'none',
  [mediaQueries.xs]: {
    display: 'initial'
  },
  [mediaQueries.sm]: {
    display: 'initial'
  },
  [mediaQueries.md]: {
    display: 'initial'
  }
};
