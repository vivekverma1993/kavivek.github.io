import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu } from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';

import HorizontalNavBar from '../../components/navbar/HorizontalNavBar';
import LogoContainer from './Logo';
import SideMenuBar from './SideMenuBar';

import {
  getObjectClassNames,
  getClassNames,
  sidebarLeft,
  getColor
} from '../../design/utils/designUtils';
import {
  themeColors,
  fontWeights,
  mediaQueries
} from '../../design/utils/designSystem';
import { barBoxShadow } from '../../design/utils/designClasses';
import { Flex, Dummy, Text, IconButton } from '../../design/components';
import {
  navBarMediaMinHeights,
  belowSingleViewBreakPoint
} from '../../design/utils/designUtils';

const styles = getObjectClassNames({
  appBarClass: {
    position: 'absolute',
    marginTop: '0px',
    backgroundColor: 'rgba(0,0,0,0)',
    transition:
      'width 1100ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
  },
  appBarShiftClass: {
    ...sidebarLeft,
    position: 'absolute',
    right: 0,
    transition:
      'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
  },
  fixedContainer: {
    top: 0,
    left: 'auto',
    right: 0,
    position: 'relative',
    zIndex: 1400
  },
  navBarContainer: {
    fontWeight: fontWeights.bold,
    color: getColor(themeColors.gray, 'DOVE'),
    marginRight: '84px',
    justifyContent: 'flex-end',
    [mediaQueries.phone]: {
      display: 'none'
    }
  },
  menuButtonClass: {
    display: 'none',
    [mediaQueries.phone]: {
      display: 'block',
      width: '30px',
      height: '50px',
      color: getColor(themeColors.grey, 'LIGHT')
    }
  },
  topBarClass: {
    height: '32px'
  },
  topBarContent: {
    position: 'absolute',
    width: '100%',
    height: '32px',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleContainer: {
    [mediaQueries.phone]: {
      marginLeft: '12px'
    }
  },
  topTitle: {
    fontSize: '14px',
    marginLeft: '84px',
    color: '#fff',
    fontWeight: 'bold',
    [mediaQueries.phone]: {
      marginLeft: '0px',
      fontSize: '12px'
    }
  },
  downloadText: {
    display: 'none',
    [mediaQueries.phone]: {
      display: 'block',
      fontSize: '10px',
      color: '#fff'
    }
  },
  rightButtons: {
    width: '375px',
    maxWidth: '400px',
    marginRight: '84px',
    color: '#fff',
    justifyContent: 'flex-end',
    [mediaQueries.phone]: {
      display: 'none'
    }
  },
  rightButton: {
    color: '#fff',
    marginLeft: '5px',
    marginRight: '5px',
    cursor: 'pointer',
    fontSize: '12px',
    ':hover': {
      color: 'rgba(255,255,255, 0.8)'
    }
  },
  getAppButton: {
    display: 'none',
    [mediaQueries.phone]: {
      display: 'block',
      height: '16px',
      borderRadius: '2px',
      border: '0.5px solid #fff',
      color: '#fff',
      fontSize: '12px',
      lineHeight: '16px',
      margin: '8px 12px',
      padding: '2px 10px'
    }
  },
  sideBarModal: {
    zIndex: '1500 !important'
  },
  paperAnchorLeft: {
    width: '75% !important',
    backgroundColor: '#f4f4f4'
  },
  mobileLoginMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'none',
    [mediaQueries.phone]: {
      display: 'flex'
    }
  },
  loginButton: {
    width: '58px',
    height: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  loginText: {
    fontSize: '12px',
    textAlign: 'center'
  },
  signUpButton: {
    backgroundColor: '#b9a3d9',
    height: '28px',
    width: '72px',
    borderRadius: '2px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginRight: '12px'
  },
  signUpText: {
    color: '#fff',
    fontSize: '12px'
  },
  image: {
    cursor: 'pointer'
  },
  company: {
    fontSize: '14px',
    color: '#fff',
    fontWeight: '500'
  }
});

class MainNavBar extends Component {
  static propTypes = {
    toggleSideToolBox: PropTypes.func,
    onNavClick: PropTypes.func,
    searchText: PropTypes.string,
    onInputChange: PropTypes.func,
    onInputFocus: PropTypes.func,
    showDropDown: PropTypes.bool,
    onDropDownSelect: PropTypes.func,
    onAddPlaceClick: PropTypes.func,
    hideAddPlaces: PropTypes.bool,
    fetchTours: PropTypes.func,
    leftNavigationOptions: PropTypes.array,
    rightNavigationOptions: PropTypes.array,
    onEnterPress: PropTypes.func,
    onAddPlaceWithGeodata: PropTypes.func,
    searchMode: PropTypes.bool,
    initialValue: PropTypes.string,
    searchLoadedFirstTime: PropTypes.bool,
    removeSearchMode: PropTypes.func,
    mobileMenuOpen: PropTypes.bool,
    logout: PropTypes.func,
    openPage: PropTypes.func
  };

  static defaultProps = {
    toggleSideToolBox: () => {},
    onNavClick: () => {},
    onInputChange: () => {},
    onInputFocus: () => {},
    onDropDownSelect: () => {},
    onAddPlaceClick: () => {},
    fetchTours: () => {},
    onEnterPress: () => {},
    addPlaceWithGeodata: () => {},
    tours: [],
    removeSearchMode: () => {},
    searchText: '',
    mobileMenuOpen: false,
    logout: () => {},
    openPage: () => {}
  };

  onGetAppClick = event => {
    event.stopPropagation();
    this.props.history.push('/app-download');
  };

  rightNavbar = () => (
    <Flex className={styles.navBarContainer}>
      <HorizontalNavBar
        navigationOptions={this.props.rightNavigationOptions}
        user={this.props.user}
        onNavClick={this.props.onNavClick}
      />
    </Flex>
  );

  /*
    side navbar drawer components
    triggered by moble menu button
  */
  mobileSideNavBar = () => {
    // let navOptions = Request.isSignedIn()
    //   ? [staticPages, contactUs, logoutSection]
    //   : [staticPages, contactUs];

    return (
      <Drawer
        key={'NavBar/Index/NavigationDrawer'}
        open={this.props.mobileMenuOpen}
        onClose={this.props.toggleSideToolBox}
        classes={{
          modal: styles.sideBarModal,
          paperAnchorLeft: styles.paperAnchorLeft
        }}
      >
        <SideMenuBar
          user={this.props.user}
          onNavClick={this.props.onNavClick}
          onLogout={this.props.logout}
        />
      </Drawer>
    );
  };

  menuButton = () => {
    return (
      <Dummy
        className={styles.menuButtonClass}
        onClick={this.props.toggleSideToolBox}
      >
        <IconButton sm>
          <Menu css={{ width: 20, height: 20 }} />
        </IconButton>
      </Dummy>
    );
  };

  render() {
    return (
      <Flex className={styles.fixedContainer}>
        <Flex primary className={`${styles.appBarClass} ${barBoxShadow}`}>
          <Flex
            alignItems="center"
            className={getClassNames(navBarMediaMinHeights)}
          >
            <Flex alignItems="center" justifyContent="space-between">
              {/* Menu button to expand or collapse side tool box */}
              {this.menuButton()}

              {/* Menu button with side nav menu in mobile view */}
              <Dummy css={belowSingleViewBreakPoint}>
                <HorizontalNavBar
                  navigationOptions={this.props.leftNavigationOptions}
                  onNavClick={this.props.onNavClick}
                />
              </Dummy>

              {/* Logo should expand when no logged in user, and collapse after login */}
              <LogoContainer
                onNavClick={this.props.onNavClick}
                onGetAppClick={this.onGetAppClick}
              />
              <Text className={styles.company}>Kavita & Vivek</Text>

              {/* right nav bar options */}
              {this.rightNavbar()}
            </Flex>
          </Flex>
        </Flex>
        {this.mobileSideNavBar()}
      </Flex>
    );
  }
}

export default withRouter(MainNavBar);
