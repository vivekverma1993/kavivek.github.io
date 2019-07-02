import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import Dummy from '../../design/components/Dummy';
// import VerticalNav from '../../components/commons/VerticalNav';
import { getClassNames } from '../../design/utils/designUtils';

const DropDownMenu = props => {
  const arrowClass = getClassNames({
    '::after': {
      content: ' ',
      position: 'absolute',
      width: 0,
      height: 0,
      borderWidth: '10px',
      borderStyle: 'solid',
      borderColor: 'transparent transparent #FFFFFF transparent',
      top: '-20px',
      right: props.right || '10px'
    }
  });

  const paperRootClass = getClassNames({
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
    marginTop: 30,
    '::after': {
      content: ' ',
      position: 'absolute',
      width: 0,
      height: 0,
      borderWidth: '10px',
      borderStyle: 'solid',
      borderColor: 'transparent transparent #FFFFFF transparent',
      top: '10px',
      right: props.right || '10px'
    },
    borderRadius: '4px',
    ' > div': {
      boxShadow: 'none'
    }
  });

  return (
    <Dummy
      className={`${props.id || ''} ${getClassNames({
        position: 'absolute',
        top: props.top || '25px',
        width: props.width,
        right: props.right || '10px',
        display: props.alwaysShow ? 'block' : 'none'
      })} dropdown-show-on-hover`}
    >
      {/*<Paper elevation={4} classes={{ root: paperRootClass }}>*/}
      {/*{props.dropDownComponent ? (*/}
      {/*props.dropDownComponent*/}
      {/*) : (*/}
      {/*<VerticalNav*/}
      {/*onNavClick={props.onNavClick}*/}
      {/*navigationOptions={props.dropDownOptions}*/}
      {/*verticalCenter={true}*/}
      {/*/>*/}
      {/*)}*/}
      {/*</Paper>*/}
    </Dummy>
  );
};

DropDownMenu.propTypes = {
  onNavClick: PropTypes.func,
  dropDownOptions: PropTypes.array,
  dropDownComponent: PropTypes.element,
  id: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alwaysShow: PropTypes.bool
};

DropDownMenu.defaultProps = {
  onNavClick: () => {},
  width: 200
};

export default DropDownMenu;
