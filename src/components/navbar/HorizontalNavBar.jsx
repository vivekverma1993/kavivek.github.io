import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Flex from '../../design/components/Flex';
import Navigation from '../../components/navbar/Navigation';
import Dummy from '../../design/components/Dummy';
import {
  getClassNames,
  hideOnMobile,
  aboveSingleViewBreakPoint,
  belowSingleViewBreakPoint
} from '../../design/utils/designUtils';
import IconButton from '../../design/components/IconButton';

const hideOnMobileClass = getClassNames(hideOnMobile);
const navigationContainer = getClassNames(aboveSingleViewBreakPoint);
const iconsContainer = getClassNames(belowSingleViewBreakPoint);

export default class HorizontalNavBar extends Component {
  static propTypes = {
    navigationOptions: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
        clickableDropDown: PropTypes.bool,
        dropDown: PropTypes.shape({
          id: PropTypes.string.isRequired,
          right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          dropDownOptions: PropTypes.array.isRequired
        }),
        iconBelowDesktop: PropTypes.element,
        hideOnMobile: PropTypes.bool,
        minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    ),
    onNavClick: PropTypes.func,
    hidden: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'right']),
    isLocationHome: PropTypes.bool
  };

  static defaultProps = {
    onNavClick: () => {}
  };

  renderNavigation = (
    text,
    id,
    isLocationHome,
    onClick,
    dropdown,
    clickableDropDown,
    minWidth
  ) => (
    <Navigation
      id={id}
      isLocationHome={isLocationHome}
      verticalCenter={true}
      key={id}
      align={this.props.align}
      primary
      text={text}
      onClick={onClick}
      dropdown={dropdown}
      clickableDropDown={clickableDropDown}
      minWidth={minWidth}
      textProps={{ bold: false }}
    />
  );

  renderIconBelowDesktop = (icon, id, hideOnMobile, onClick) => (
    <IconButton
      key={id}
      muiProps={
        hideOnMobile
          ? { className: hideOnMobileClass, onClick: () => onClick(id) }
          : { onClick: () => onClick(id) }
      }
    >
      {icon}
    </IconButton>
  );

  render() {
    return (
      <Dummy>
        <Dummy className={navigationContainer}>
          <Flex
            row
            alignItems={'center'}
            justifyContent={
              this.props.align === 'right' ? 'flex-end' : 'flex-start'
            }
          >
            {this.props.navigationOptions
              ? this.props.navigationOptions.map(
                  ({
                    text,
                    element,
                    id,
                    dropDown,
                    clickableDropDown,
                    minWidth
                  }) =>
                    text
                      ? this.renderNavigation(
                          text,
                          id,
                          this.props.isLocationHome,
                          this.props.onNavClick,
                          clickableDropDown,
                          minWidth
                        )
                      : element
                      ? element
                      : null
                )
              : null}
            {this.props.children}
          </Flex>
        </Dummy>
        <Dummy className={iconsContainer}>
          {this.props.navigationOptions
            ? this.props.navigationOptions.map(navigation =>
                navigation.iconBelowDesktop
                  ? this.renderIconBelowDesktop(
                      navigation.iconBelowDesktop,
                      navigation.id,
                      navigation.hideOnMobile,
                      this.props.onNavClick
                    )
                  : null
              )
            : null}
        </Dummy>
      </Dummy>
    );
  }
}
