import React, { Component } from 'react';
import PropTypes from 'prop-types';
import findIndex from 'lodash/findIndex';
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import onClickOutside from 'react-onclickoutside';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Check from '@material-ui/icons/Check';

import SelectMui from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { Dummy, Text } from './index';
import { getClassNames } from '../utils/designUtils';

const inputContainer = height =>
  getClassNames({
    height,
    '& > div': {
      height,
      paddingLeft: 10
    },
    '& svg': {
      top: `calc(${height / 2}px - 12px)`,
      right: 1
    }
  });

const selectedClass = (height, borderRadius, backgroundColor) =>
  getClassNames({
    borderRadius: `${borderRadius} !important`,
    height,
    '& > div': {
      height: height,
      lineHeight: `${height}px`,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '&:focus': {
      borderRadius: `${borderRadius} !important`,
      height,
      backgroundColor: backgroundColor || 'rgba(254, 254, 254, 0)'
    }
  });

const selectedClassWithoutLineHeight = (
  height,
  borderRadius,
  backgroundColor
) =>
  getClassNames({
    borderRadius: `${borderRadius} !important`,
    height,
    '& > div': {
      height: height,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '&:focus': {
      borderRadius: `${borderRadius} !important`,
      height,
      backgroundColor: backgroundColor || 'rgba(254, 254, 254, 0)'
    }
  });

const select = (width, height, borderRadius, hover) =>
  getClassNames({
    width,
    height,
    border: 'solid 0.5px #979797',
    borderRadius: `${borderRadius} !important`,
    background: 'transparent',
    marginTop: '0 !important',
    '&:hover': hover
  });

const formControl = (width, height = '100%') =>
  getClassNames({
    height,
    width
  });

const menuItem = height =>
  getClassNames({
    height,
    padding: '4px 10px'
  });

const inputLabel = (
  height,
  fontSize = 11,
  fontWeight = 600,
  fontColor = '#6e6e6e'
) =>
  getClassNames({
    fontSize,
    fontWeight,
    letterSpacing: -0.3,
    color: fontColor,
    transform: 'none !important',
    top: `calc(${height / 2}px - ${fontSize / 2}px)`,
    left: 10
  });

const checkIconClass = getClassNames({
  width: 24,
  height: 24,
  marginRight: 4,
  '& > svg': {
    fill: '#638b97'
  }
});

const menuItemText = (fontSize, fontWeight, fontColor = '#6e6e6e') =>
  getClassNames({
    color: fontColor,
    fontSize,
    letterSpacing: '-0.3px',
    fontWeight
  });

const menuProps = (menuHeight, borderRadius) =>
  getClassNames({
    height: menuHeight,
    borderRadius,
    '& > ul': {
      padding: 0
    }
  });

class Select extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    valueKey: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    showLabel: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.number.isRequired,
    fontSize: PropTypes.number,
    borderRadius: PropTypes.string,
    menuHeight: PropTypes.number,
    value: PropTypes.any.isRequired,
    placeholder: PropTypes.string,
    fontWeight: PropTypes.number,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    handleClose: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    multiple: false,
    showLabel: true,
    placeholder: '',
    fontSize: 11,
    borderRadius: '4px',
    fontWeight: 600,
    menuHeight: 200,
    fontColor: '#6e6e6e',
    handleClose: () => {},
    className: ''
  };

  handleClickOutside = event => {
    if (
      (isArray(event.path) &&
        event.path
          .filter(item => isString(item.id))
          .map(item => item.id)
          .filter(item => item === 'Menu-Item').length > 0) ||
      (isArray(event.path) &&
        event.path
          .map(item => item.className)
          .filter(item => isString(item))
          .filter(item => item.includes('not-close')).length > 0)
    ) {
      // do nothing
    } else {
      this.props.handleClose();
    }
  };

  render() {
    const {
      options,
      valueKey,
      labelKey,
      id,
      name,
      onChange,
      showLabel,
      multiple,
      value,
      placeholder,
      width,
      height,
      fontSize,
      menuHeight,
      borderRadius,
      backgroundColor,
      fontWeight,
      fontColor,
      hover,
      className
    } = this.props;

    return (
      <FormControl className={`${formControl(width, height)} ${className}`}>
        {showLabel ? (
          <InputLabel
            shrink={false}
            htmlFor={id}
            className={inputLabel(height, fontSize, fontWeight, fontColor)}
          >
            {name}
          </InputLabel>
        ) : null}
        <SelectMui
          id={id}
          multiple={multiple}
          value={value}
          className={select(width, height, borderRadius, hover)}
          disableUnderline={true}
          classes={{
            root: inputContainer(height),
            selectMenu: this.props.activitiesView
              ? selectedClassWithoutLineHeight(
                  height,
                  borderRadius,
                  backgroundColor
                )
              : selectedClass(height, borderRadius, backgroundColor)
          }}
          onChange={onChange}
          placeholder={placeholder}
          margin="normal"
          renderValue={selected => {
            let selectedString;
            if (multiple) {
              selectedString = selected
                .map(val => {
                  const index = findIndex(
                    options,
                    option => option[valueKey].toString() === val.toString()
                  );
                  return index !== -1 ? options[index][labelKey] : '';
                })
                .filter(val => val !== '')
                .join(', ');
              selectedString = selectedString || name;
            } else {
              const index = findIndex(
                options,
                option => option[valueKey] === value
              );
              if (index !== -1) {
                selectedString = options[index][labelKey];
              }
            }
            return (
              <Text
                bold
                className={menuItemText(fontSize, fontWeight, fontColor)}
              >
                {selectedString}
              </Text>
            );
          }}
          MenuProps={{
            classes: {
              paper: menuProps(menuHeight, borderRadius)
            }
          }}
        >
          {options.map((option, index) => {
            let checked = false;
            if (multiple) {
              const index = findIndex(
                value,
                val => val.toString() === option[valueKey].toString()
              );
              checked = index > -1;
            } else {
              if (
                value !== null &&
                value !== undefined &&
                option[valueKey].toString() === value.toString()
              ) {
                checked = true;
              }
            }

            return (
              <MenuItem
                className={menuItem(height)}
                value={option[valueKey]}
                key={'MenuItem' + index}
                index={index}
                id={'Menu-Item'}
              >
                <Dummy className={checkIconClass}>
                  {checked ? <Check /> : null}
                </Dummy>
                <Text
                  bold
                  className={menuItemText(fontSize, fontWeight, fontColor)}
                >
                  {option[labelKey]}
                </Text>
              </MenuItem>
            );
          })}
        </SelectMui>
      </FormControl>
    );
  }
}

export default onClickOutside(Select);
