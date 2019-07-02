import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import Text from '../../design/components/Text';
import { getClassNames } from '../../design/utils/designUtils';
import { spacing } from '../../design/utils/designSystem';
import Flex from '../../design/components/Flex';
import Dummy from '../../design/components/Dummy';

const hoverStyles = {
  '&:hover': {
    color: '#484848'
  }
};

class Navigation extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    primary: PropTypes.bool,
    leftElement: PropTypes.element,
    rightElement: PropTypes.element,
    onClick: PropTypes.func,
    align: PropTypes.oneOf(['left', 'right']),
    verticalCenter: PropTypes.bool,
    disabled: PropTypes.bool,
    dropdown: PropTypes.node,
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    clickableDropDown: PropTypes.bool,
    isLocationHome: PropTypes.bool,
    /* control text component style */
    textProps: PropTypes.object
  };

  static defaultProps = {
    onClick: () => {},
    textProps: {}
  };

  state = {
    showDropDown: !this.props.clickableDropDown
  };

  handleClickOutside = event => {
    if (this.props.clickableDropDown) {
      this.setState({
        showDropDown: false
      });
    }
  };

  render() {
    const primaryTemplate = {
      minHeight: '30px',
      textTransform: 'capitalize',
      boxSizing: 'border-box',
      marginRight: 4,
      padding: `0 ${spacing.md}`,
      '& div': {},
      color: '#fff',
      fontWeight: '500',
      fontSize: '16px'
    };

    const classObject = this.props.primary ? { ...primaryTemplate } : {};
    classObject['position'] = 'relative';
    classObject['white-space'] = 'nowrap';
    if (!this.props.disabled) {
      classObject['&:hover'] = {
        cursor: 'pointer',
        '& .dropdown-show-on-hover': {
          display: 'block'
        }
      };
    }
    if (this.props.align) {
      if (this.props.align === 'right') {
        classObject['textAlign'] = 'right';
      } else {
        classObject['textAlign'] = 'left';
      }
    }

    if (this.props.clickableDropDown) {
      // TODO: display flex causes dropdown to shift to top and then we require
      // top property.
      classObject['paddingTop'] = '5px';
      classObject['paddingBottom'] = '5px';
    }

    const onClick = e => {
      if (this.props.clickableDropDown) {
        e.stopPropagation();
        e.preventDefault();
        this.setState(state => ({
          showDropDown: !state.showDropDown
        }));
      } else if (!this.props.disabled) {
        this.props.onClick(this.props.id);
      }
    };

    return this.props.leftElement || this.props.rightElement ? (
      <Dummy
        css={{ minWidth: this.props.minWidth }}
        className={`${getClassNames(classObject)} ${getClassNames(
          hoverStyles
        )}`}
        onClick={onClick}
      >
        <Flex row wrap={'nowrap'} alignItems={'center'}>
          {this.props.leftElement}
          <Text
            xs
            verticalCenter={this.props.verticalCenter}
            {...this.props.textProps}
          >
            {this.props.text}
          </Text>
          {this.props.rightElement}
        </Flex>
        <Dummy
          css={{
            transition: 'all 0.3s ease',
            opacity: this.state.showDropDown ? 1 : 0
          }}
        >
          {this.state.showDropDown ? this.props.dropdown : null}
        </Dummy>
      </Dummy>
    ) : (
      <Text
        xs
        verticalCenter={this.props.verticalCenter}
        className={`${getClassNames(classObject)} ${getClassNames(
          hoverStyles
        )}`}
        onClick={onClick}
        css={{ minWidth: this.props.minWidth }}
        {...this.props.textProps}
      >
        {this.props.text}
        {this.state.showDropDown ? this.props.dropdown : null}
      </Text>
    );
  }
}

export default onClickOutside(Navigation);
