import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FlipClock from 'x-react-flipclock';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

import {
  FlexContainer,
  FlexItem,
  Flex,
  Image,
  Text,
  Dummy
} from '../../design/components/index';
import { getObjectClassNames } from '../../design/utils/designUtils';
import { mediaQueries } from '../../design/utils/designSystem';

const image = require('../../resources/kavivek.jpg');
const venue = require('../../resources/venue.jpg');

const classes = getObjectClassNames({
  mobileContainer: {
    display: 'none',
    [mediaQueries.tablet]: {
      display: 'block'
    },
    [mediaQueries.phone]: {
      display: 'block'
    }
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    [mediaQueries.tablet]: {
      display: 'none'
    },
    [mediaQueries.phone]: {
      display: 'none'
    }
  },
  bannerBackground: {
    backgroundColor: '#fff',
    height: '100vh',
    objectFit: 'cover',
    width: '100%',
    objectPosition: '0px -140px',
    [mediaQueries.lg]: {
      objectPosition: '0px -100px',
    },
    [mediaQueries.md]: {
      objectPosition: 'unset',
    },
    [mediaQueries.tablet]: {
      objectPosition: '0px -160px',
    },
    [mediaQueries.small]: {
      objectPosition: 'unset'
    }
  },
  card: {
    backgroundColor: 'pink',
    height: '100vh'
  },
  title: {
    fontSize: 32,
    fontFamily: 'Alex Brush'
  },
  kavivek: {
    fontSize: 32,
    fontWeight: 500,
    fontFamily: 'Alex Brush',
    margin: '10px 0 5px 0'
  },
  date: {
    fontSize: 32,
    fontFamily: 'Alex Brush',
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
  },
  sliderImage: {
    width: '100%',
    objectFit: 'cover'
  },
  sectionTitleTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    [mediaQueries.phone]: {
      height: 80
    }
  },
  sectionTitleText: {
    fontSize: 32,
    fontWeight: 500,
    fontFamily: 'Alex Brush',
    margin: '10px 0 5px 0'
  },
  extraContainer: {
    flexDirection: 'column',
    padding: '0px 100px 10px 100px',
    [mediaQueries.phone]: {
      padding: '0px 20px 10px 20px'
    }
  },
  directions: {
    textDecoration: 'underline',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Open Sans'
  }
});

export default class Index extends PureComponent {
  static propTypes = {
    source: PropTypes.string
  };

  renderContent = () => (
    <Flex column absoluteCenter>
      <Text className={classes.title}>Kavita & Vivek</Text>
      <Text className={classes.kavivek}>are getting Married</Text>
      <Text className={classes.date}>On 6th December 2019</Text>
      <Flex className={classes.timer}>
        <FlipClock type={'countdown'} count_to={'2019-12-06 00:00:00'} />
      </Flex>
    </Flex>
  );

  renderSectionTitle = text => (
    <Flex className={classes.sectionTitleTextContainer}>
      <Text className={classes.sectionTitleText}>{text}</Text>
    </Flex>
  );

  renderSlider = () => {
    return (
      <Flex column>
        {this.renderSectionTitle('Some moments to cherish')}
        <AwesomeSlider cssModule={AwsSliderStyles}>
          <Dummy data-src={image} />
          <Dummy data-src={image} />
          <Dummy data-src={image} />
        </AwesomeSlider>
      </Flex>
    );
  };

  renderVenue = () => {
    return (
      <Flex column>
        {this.renderSectionTitle('Venue of our wedding')}
        <Image className={classes.sliderImage} src={venue} />
      </Flex>
    );
  };

  renderImage = () => (
    <Image className={classes.bannerBackground} src={image} />
  );

  renderMobileView = () => {
    return (
      <Flex>
        {this.renderImage()}
        <Flex absoluteCenter className={classes.overlay}>
          {this.renderContent()}
        </Flex>
      </Flex>
    );
  };

  onDirectionClick = () =>
    window
      .open(
        'https://www.google.com/maps/dir//Le+diamond,+Block+C,+Yamuna+Vihar,+Shahdara,+Delhi,+110053/@28.7000352,77.2648183,15.87z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfc6d32a0f76d:0xa263eaebe2d0c0b6!2m2!1d77.2728498!2d28.6973764',
        '_blank'
      )
      .focus();

  render() {
    return (
      <Flex column>
        <Flex column>
          <Flex className={classes.mobileContainer}>
            {this.renderImage()}
            <Flex absoluteCenter className={classes.overlay}>
              {this.renderContent()}
            </Flex>
          </Flex>
          <FlexContainer className={classes.container}>
            <FlexItem md={6} className={classes.card}>
              {this.renderContent()}
            </FlexItem>
            <FlexItem md={6}>{this.renderImage()}</FlexItem>
          </FlexContainer>
        </Flex>
        {/*<Flex className={classes.extraContainer}>*/}
          {/*{this.renderSlider()}*/}
          {/*<Flex css={{ height: 30 }} />*/}
          {/*{this.renderVenue()}*/}
          {/*<Flex absoluteCenter css={{ width: '100%', height: 50 }}>*/}
            {/*<Text*/}
              {/*onClick={this.onDirectionClick}*/}
              {/*className={classes.directions}*/}
            {/*>*/}
              {/*Check directions on Google maps*/}
            {/*</Text>*/}
          {/*</Flex>*/}
        {/*</Flex>*/}
      </Flex>
    );
  }
}
