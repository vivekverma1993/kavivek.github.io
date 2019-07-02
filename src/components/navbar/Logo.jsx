import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  getObjectClassNames,
  searchPageAnimationFn
} from '../../design/utils/designUtils';
import { mediaQueries } from '../../design/utils/designSystem';
import { Dummy, Image } from '../../design/components/';

const logo = require('../../resources/logo.svg');

const styles = getObjectClassNames({
  logoClass: {
    alignItems: 'center',
    marginRight: '10px',
    display: 'inline-flex',
    flex: 'none',
    overflow: 'hidden',
    justifyContent: 'center',
    transition: searchPageAnimationFn('width'),
    marginLeft: '84px',
    cursor: 'pointer',
    [mediaQueries.phone]: {
      marginLeft: '20px'
    }
  },
  buttonClass: {
    border: '1px solid #b9a3d9',
    backgroundColor: '#fff',
    borderRadius: '2px',
    height: '28px',
    width: '84px',
    ':focus': {
      outline: 'unset !important'
    },
    color: '#b9a3d9',
    fontSize: '12px',
    lineHeight: '16px',
    cursor: 'pointer',
    [mediaQueries.phone]: {
      display: 'none'
    }
  }
});

export default class Logo extends Component {
  static propTypes = {
    sideBarOpen: PropTypes.bool,
    onNavClick: PropTypes.func,
    onGetAppClick: PropTypes.func
  };

  static defaultProps = {
    onNavClick: () => {},
    onGetAppClick: () => {}
  };

  render() {
    return (
      <Dummy
        className={styles.logoClass}
        onClick={() => {
          this.props.onNavClick('/');
        }}
      >
        <Dummy>
          <Image height={50} src={logo} />
        </Dummy>
      </Dummy>
    );
  }
}
