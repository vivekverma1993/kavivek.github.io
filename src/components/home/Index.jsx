import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

import {
  FlexContainer,
  FlexItem,
  Flex,
  Image,
  Text,
  Dummy,
  CountDown
} from '../../design/components/index';
import { getObjectClassNames } from '../../design/utils/designUtils';
import { mediaQueries } from '../../design/utils/designSystem';

const image = require('../../resources/kavivek.jpg');
const venue = require('../../resources/venue.jpg');

const sliderImages = [
  require('../../resources/slider-2.jpg'),
  require('../../resources/slider-3.jpg'),
  require('../../resources/slider-4.jpg'),
  require('../../resources/slider-5.jpg')
];

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
      objectPosition: 'unset'
    },
    [mediaQueries.md]: {
      objectPosition: 'unset'
    },
    [mediaQueries.tablet]: {
      objectPosition: '0px -160px'
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
    display: 'none',
    [mediaQueries.phone]: {
      display: 'block'
    }
  },
  sectionTitleText: {
    fontSize: 32,
    fontWeight: 500,
    fontFamily: 'Alex Brush',
    margin: '10px 0 5px 0',
    textAlign: 'center'
  },
  extraContainer: {
    flexDirection: 'column'
  },
  directions: {
    textDecoration: 'underline',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Open Sans'
  },
  togetherContainer: {
    padding: 40,
    textAlign: 'center',
    [mediaQueries.phone]: {
      padding: 10
    }
  },
  together: {
    fontSize: 32,
    fontFamily: 'Alex Brush',
    [mediaQueries.phone]: {
      marginTop: 40
    }
  },
  venueContainer: {
    flexDirection: 'column',
    padding: 40,
    textAlign: 'center',
    [mediaQueries.phone]: {
      padding: 10
    }
  },
  venue: {
    fontSize: 32,
    fontFamily: 'Alex Brush',
    [mediaQueries.phone]: {
      marginTop: 40
    }
  },
  address: {
    fontSize: 24,
    fontFamily: 'Alex Brush',
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  slideImage: {
    objectPosition: '0px -200px'
  },
  sliderContainer: {
    height: '100vh',
    [mediaQueries.tablet]: {
      height: '50vh'
    },
    [mediaQueries.phone]: {
      height: '50vh'
    }
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
        <CountDown date={'2019-12-06T00:00:00.000+05:30'} />
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
      <FlexContainer css={{ alignItems: 'center' }}>
        <FlexItem md={6} className={classes.sliderContainer}>
          <AwesomeSlider bullets={false} cssModule={AwsSliderStyles}>
            {sliderImages.map((img, index) => (
              <Dummy key={`slider-image--${index}`} data-src={img} />
            ))}
          </AwesomeSlider>
        </FlexItem>
        <FlexItem md={6}>
          <Flex absoluteCenter className={classes.togetherContainer}>
            <Text className={classes.together}>
              We met it was luck, we talked it was chance, we fell in love it
              was destiny but we stayed together by our choice and constant
              efforts... because true love isn't found it's built...
            </Text>
          </Flex>
        </FlexItem>
      </FlexContainer>
    );
  };

  renderVenue = () => {
    return (
      <FlexContainer css={{ alignItems: 'center' }}>
        <FlexItem md={6} className={classes.venueContainer}>
          <Text className={classes.venue}>Venue of our marriage.</Text>
          <Text onClick={this.onDirectionClick} className={classes.address}>
            Block C, Yamuna Vihar, Shahdara, Delhi, 110053
          </Text>
        </FlexItem>
        <FlexItem md={6} css={{ height: '50vh' }}>
          <Image className={classes.sliderImage} src={venue} />
        </FlexItem>
      </FlexContainer>
    );
  };

  renderImage = () => (
    <Image className={classes.bannerBackground} src={image} />
  );

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
        <Flex className={classes.extraContainer}>
          {this.renderSectionTitle('Moments to Cherish')}
          {this.renderSlider()}
          {this.renderVenue()}
          {/*<Flex absoluteCenter css={{ width: '100%', height: 50 }}>*/}
          {/*<Text*/}
          {/*onClick={this.onDirectionClick}*/}
          {/*className={classes.directions}*/}
          {/*>*/}
          {/*Check directions on Google maps*/}
          {/*</Text>*/}
          {/*</Flex>*/}
        </Flex>
      </Flex>
    );
  }
}
