import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import Flex from './Flex';

const Container = glamorous(Flex)(
  {
    flexWrap: 'wrap'
  },
  ({ alignItems, justifyContent, alignSelf }) => ({
    alignItems,
    justifyContent,
    alignSelf
  })
);

export default class FlexContainer extends Component {
  static propTypes = {
    row: PropTypes.bool,
    column: PropTypes.bool,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    alignSelf: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]),
    css: PropTypes.object
  };

  static defaultProps = {
    row: true,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    css: {}
  };

  render() {
    return <Container {...this.props}>{this.props.children}</Container>;
  }
}
