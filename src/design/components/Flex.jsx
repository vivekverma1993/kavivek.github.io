import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { includes } from 'lodash';

/*
 * This is just a dummy wrapper component
 * For any css, just pass css={{}} to the element for inline styles
 */

const flexDirections = ['row', 'column', 'row-reverse', 'column-reverse'];
const flexAlignItems = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'stretch'
];

const flexWrapOptions = [true, false, 'wrap', 'nowrap'];

const FlexBox = glamorous.div(
  {
    display: 'flex',
    boxSizing: 'border-box'
  },
  props => {
    const conditionalStyles = {
      alignItems:
        includes(flexAlignItems, props.alignItems) >= 0
          ? props.alignItems
          : 'flex-start',
      justifyContent:
        includes(flexAlignItems, props.justifyContent) >= 0
          ? props.justifyContent
          : 'flex-start',
      height: props.height,
      width: props.width
    };
    if (props.wrap && includes([true, 'true', 'wrap'], props.wrap)) {
      conditionalStyles.flexWrap = 'wrap';
    }

    if (props.alignSelf && includes(flexAlignItems, props.alignSelf)) {
      conditionalStyles.alignSelf = props.alignSelf;
    }
    if (props.hasOwnProperty('absoluteCenter') && props['absoluteCenter']) {
      return {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: props.height
      };
    }

    // Flex Direction
    for (const t of flexDirections) {
      if (
        props.hasOwnProperty(t) &&
        props[t] &&
        flexDirections.indexOf(t) >= 0
      ) {
        conditionalStyles.flexDirection = t;
        break;
      }
    }

    if (props.hasOwnProperty('inline') && props['inline']) {
      conditionalStyles.display = 'inline-flex';
    }

    if (props.hasOwnProperty('adjustWidth') && props['adjustWidth']) {
      conditionalStyles.width = 'auto';
    }

    return conditionalStyles;
  }
);

export default class Flex extends Component {
  static propTypes = {
    /** Makes the flex behave like a row if `true` */
    row: PropTypes.bool,
    /** Makes the flex behave like a column if `true` */
    column: PropTypes.bool,
    alignItems: PropTypes.oneOf(flexAlignItems),
    justifyContent: PropTypes.oneOf(flexAlignItems),
    alignSelf: PropTypes.oneOf(flexAlignItems),
    /** Makes the child components align to center horizontally and vertically if `true` */
    absoluteCenter: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    wrap: PropTypes.oneOf(flexWrapOptions),
    css: PropTypes.object,
    /** Makes the flex an inline flex when set `true` */
    inline: PropTypes.bool
  };

  static defaultProps = {
    absoluteCenter: false,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 'auto',
    width: '100%'
  };

  render() {
    return <FlexBox {...this.props}>{this.props.children}</FlexBox>;
  }
}
