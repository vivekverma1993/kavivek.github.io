import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FlipClock from 'x-react-flipclock'

import { FlexContainer, FlexItem, Flex, Image, Text } from '../../design/components/index';
import { getObjectClassNames } from '../../design/utils/designUtils';
import { mediaQueries } from '../../design/utils/designSystem';

const image = require('../../resources/kavivek.jpg');

const classes = getObjectClassNames({
  container: {
    backgroundColor: '#fff'
  },
  bannerBackground: {
    backgroundColor: '#fff',
    height: '100vh',
    objectFit: 'cover',
    width: '100%',
    objectPosition: '0 0px',
    [mediaQueries.phone]: {
      objectPosition: 'unset'
    }
  },
  card: {
    backgroundColor: 'pink',
    height: '100vh'
  },
  title: {
    fontSize: 32,
    fontFamily: 'Open Sans'
  },
  kavivek: {
    fontSize: 32,
    fontWeight: 500,
    fontFamily: 'Alex Brush',
    margin: '10px 0 5px 0'
  },
  date: {
    fontSize: 32,
    fontFamily: 'Open Sans',
    marginBottom: 5
  },
  timer: {
    height: 'auto',
    width: '50%',
    marginTop: 20,
    [mediaQueries.phone]: {
      width: '80%'
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(255,255,255,0.45)'
  }
});

export default class Index extends PureComponent {
  static propTypes = {
    source: PropTypes.string
  };

  renderContent = () => (
    <Flex column absoluteCenter>
      <Text className={classes.title}>We are getting Married</Text>
      <Text className={classes.kavivek}>Kavita & Vivek</Text>
      <Text className={classes.date}>6th December</Text>
      <Flex className={classes.timer}>
        <FlipClock
          type={"countdown"}
          count_to={"2019-12-06 00:00:00"}
        />
      </Flex>
    </Flex>
  );

  renderMobileView = () => {
    return (
      <Flex>
        <Image className={classes.bannerBackground} src={image} />
        <Flex absoluteCenter className={classes.overlay}>
          {this.renderContent()}
        </Flex>
      </Flex>
    )
  };

  render() {
    return window.onMobile() ? this.renderMobileView() : (
      <FlexContainer className={classes.container}>
        <FlexItem md={6} className={classes.card}>
          {this.renderContent()}
        </FlexItem>
        <FlexItem md={6}>
          <Image className={classes.bannerBackground} src={image} />
        </FlexItem>
      </FlexContainer>
    );
  }
}
