import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputField from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import { getObjectClassNames } from '../utils/designUtils';
import { Flex, Text } from './index';

const Classes = getObjectClassNames({
  primary: {
    width: '100%',
    height: '40px',
    borderRadius: '2px',
    backgroundColor: 'white',
    padding: '0 12px',
    border: 'solid 1px #dbdbdb',
    boxSizing: 'border-box'
  },
  heightUnset: {
    height: 'unset'
  },
  error: {
    border: 'solid 1px #d0021b'
  },
  errorText: {
    position: 'absolute',
    fontSize: '8px',
    color: '#d0021b',
    bottom: '-11px'
  },
  primaryFont: {
    fontFamily: 'Circular,sans-serif'
  },
  adornment: {
    maxHeight: 'unset'
  }
});

export default class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    primary: PropTypes.bool,
    mui: PropTypes.bool,
    placeholder: PropTypes.string,
    hideUnderline: PropTypes.bool,
    valueEntered: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    id: PropTypes.string,
    onKeyDown: PropTypes.func,
    inputRef: PropTypes.func,
    defaultValue: PropTypes.string,
    inputClassName: PropTypes.string,
    type: PropTypes.string,
    endAdornment: PropTypes.element,
    hasError: PropTypes.bool,
    errorText: PropTypes.string
  };

  static defaultProps = {
    mui: false,
    multiline: false,
    onFocus: e => {},
    onBlur: e => {},
    rows: 5,
    onKeyDown: () => {},
    inputRef: ref => (this.input = ref),
    onChange: e => {},
    defaultValue: '',
    inputClassName: '',
    type: 'text'
  };

  inputRef = null;

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.props.defaultValue && this.inputRef)
      this.inputRef.value = nextProps.defaultValue;
  }

  render() {
    const {
      mui,
      primary,
      id,
      placeholder,
      hideUnderline,
      valueEntered,
      value,
      onChange,
      adornment,
      multiline,
      onFocus,
      onBlur,
      rows,
      onKeyDown,
      autoFocus,
      inputRef,
      defaultValue,
      inputClassName,
      type,
      endAdornment,
      hasError,
      errorText
    } = this.props;

    let inputStyleProps = {
      className: `${primary ? Classes.primary : null} ${this.props.className}`
    };

    if (hasError) {
      inputStyleProps.className = `${inputStyleProps.className} ${
        Classes.error
      }`;
    }

    const onKeyPress = e => {
      if (!valueEntered) {
        return;
      }
      if (e.key === 'Enter') {
        valueEntered(e.target.value);
        e.preventDefault();
      }
    };

    let classes = {};
    if (multiline) {
      classes['inputMultiline'] = Classes.heightUnset;
    }

    classes['input'] = Classes.primaryFont;
    if (inputClassName) {
      classes['input'] = classes['input'] + ' ' + inputClassName;
    }

    return mui ? (
      <Flex css={{ position: 'relative' }}>
        <InputField
          classes={classes}
          multiline={multiline}
          rows={multiline ? rows : 1}
          startAdornment={
            adornment ? (
              <InputAdornment position="start">{adornment}</InputAdornment>
            ) : null
          }
          endAdornment={
            endAdornment ? (
              <InputAdornment
                classes={{ root: Classes.adornment }}
                position="end"
              >
                {endAdornment}
              </InputAdornment>
            ) : null
          }
          {...inputStyleProps}
          placeholder={placeholder}
          disableUnderline={hideUnderline}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onChange={e => {
            onChange(e.target.value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          id={id}
          autoFocus={autoFocus}
          inputRef={ref => {
            if (ref) {
              this.inputRef = ref;
              inputRef(ref);
            }
          }}
          defaultValue={defaultValue}
          type={type}
        />
        {hasError && errorText && errorText.length > 0 ? (
          <Text className={Classes.errorText}>{errorText}</Text>
        ) : null}
      </Flex>
    ) : (
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        id={id}
        onKeyDown={onKeyDown}
        className={this.props.className}
        ref={inputRef}
        type={type}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    );
  }
}
