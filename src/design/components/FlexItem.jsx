import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { includes, floor } from 'lodash';
import Flex from './Flex';
import { gridMediaQueries } from '../utils/designSystem';

const spacing = 0;
const allowedSizes = [0, 1, 2, 2.4, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const getSize = size => {
  let flexSize = 12;
  if (size && includes(allowedSizes, Number(size))) {
    flexSize = size;
  }

  return `${floor(
    Math.round((flexSize * Math.pow(10, 6)) / 12) / Math.pow(10, 4),
    2
  )}%`;
};

const Item = glamorous(Flex)(
  {
    flex: 1,
    margin: 0,
    padding: `${spacing}px`,
    boxSizing: 'border-box',
    '&>div': {
      width: '100%',
      height: '100%'
    }
  },
  ({ xs = 12, sm, md, lg, xl }) => {
    const itemStyles = {};
    if (xs) {
      itemStyles[gridMediaQueries.xs] = { flex: `0 0 ${getSize(xs)}` };
      itemStyles['width'] = getSize(xs);
    }
    if (sm) {
      itemStyles[gridMediaQueries.sm] = { flex: `0 0 ${getSize(sm)}` };
      itemStyles['width'] = getSize(sm);
    }
    if (md) {
      itemStyles[gridMediaQueries.md] = { flex: `0 0 ${getSize(md)}` };
      itemStyles['width'] = getSize(md);
    }
    if (lg) {
      itemStyles[gridMediaQueries.lg] = { flex: `0 0 ${getSize(lg)}` };
      itemStyles['width'] = getSize(lg);
    }
    if (xl) {
      itemStyles[gridMediaQueries.xl] = { flex: `0 0 ${getSize(xl)}` };
      itemStyles['width'] = getSize(xl);
    }
    return itemStyles;
  }
);

export default class FlexItem extends Component {
  static propTypes = {
    xs: PropTypes.oneOf(allowedSizes),
    sm: PropTypes.oneOf(allowedSizes),
    md: PropTypes.oneOf(allowedSizes),
    lg: PropTypes.oneOf(allowedSizes),
    xl: PropTypes.oneOf(allowedSizes)
  };

  render() {
    return <Item {...this.props}>{this.props.children}</Item>;
  }
}
