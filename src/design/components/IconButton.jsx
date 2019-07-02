import React from 'react';
import PropTypes from 'prop-types';
import MUIIconButton from '@material-ui/core/IconButton';

import { getClassNames } from '../utils/designUtils';
import { iconSizes } from '../utils/designSystem';

const IconButton = props => {
  const classes = {};
  Object.keys(iconSizes).every(allowedSize => {
    if (props[allowedSize]) {
      classes.fontSize = iconSizes[allowedSize];
      return false;
    }
    return true;
  });
  return (
    <MUIIconButton
      {...props.muiProps}
      classes={{ root: getClassNames(classes) }}
    >
      {props.children}
    </MUIIconButton>
  );
};

IconButton.propTypes = {
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  // mui props contains all the props that we might
  // want to pass from material ui documentation, thus is difficult
  // to define the object shape
  muiProps: PropTypes.object
};

export default IconButton;
