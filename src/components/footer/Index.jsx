import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Text, Flex, Image } from '../../design/components/index';
import { getObjectClassNames } from '../../design/utils/designUtils';
import { mediaQueries } from '../../design/utils/designSystem';

const copyright =
  'Copyright © 2019 Farmbase Pvt. Ltd. All rights reserved. Contact us at contact@farmbase.in';
const facebook = require('../../resources/social/facebook.svg');
const twitter = require('../../resources/social/twitter.svg');
const linkedIn = require('../../resources/social/linkedin.svg');

const styles = getObjectClassNames({
  container: {
    padding: '48px 84px',
    flexDirection: 'column',
    backgroundColor: '#616161',
    alignItems: 'center',
    [mediaQueries.phone]: {
      marginTop: '24px',
      padding: '16px 12px'
    }
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: '16x',
    color: '#fff',
    fontWeight: '500',
    letterSpacing: '1.3px',
    padding: '0px 10px'
  },
  copyRight: {
    fontSize: '14px',
    marginTop: '20px',
    color: '#fff',
    [mediaQueries.phone]: {
      marginTop: '24px'
    }
  },
  backToTop: {
    position: 'absolute',
    backgroundColor: '#000',
    padding: '6px 8px',
    right: '0px',
    cursor: 'pointer'
  },
  backToTopText: {
    color: '#ffff',
    fontSize: '12px',
    lineHeight: '18px',
    textAlign: 'center',
    [mediaQueries.phone]: {
      fontSize: '10px',
      lineHeight: '16px'
    }
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'auto',
    marginTop: '20px'
  },
  facebook: {
    height: '48px',
    width: '48px',
    cursor: 'pointer',
    ':hover': {},
    [mediaQueries.phone]: {
      height: '36px',
      width: '36px',
      marginLeft: '0px'
    }
  },
  twitter: {
    height: '48px',
    width: '48px',
    cursor: 'pointer',
    marginLeft: '20px',
    ':hover': {},
    [mediaQueries.phone]: {
      height: '36px',
      width: '36px',
      marginLeft: '24px'
    }
  },
  linkedIn: {
    height: '48px',
    width: '48px',
    cursor: 'pointer',
    marginLeft: '20px',
    ':hover': {},
    [mediaQueries.phone]: {
      height: '36px',
      width: '36px',
      marginLeft: '24px'
    }
  },
  title: {
    fontSize: '32px'
  }
});

export default class Footer extends PureComponent {
  static propTypes = {
    onDownloadApp: PropTypes.func,
    minified: PropTypes.bool,
    openLink: PropTypes.func
  };

  static defaultProps = {
    onDownloadApp: () => {},
    minified: false
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Flex className={styles.container}>
        <Flex className={styles.topRow}>
          <Text className={styles.button}>TECHNOLOGY</Text>
          <Text className={styles.button}>PRODUCTS</Text>
          <Text className={styles.button}>TEAM</Text>
        </Flex>
        <Flex className={styles.socialContainer}>
          <Image
            onClick={() => this.props.openLink('https://www.facebook.com/Farmbase-977593159104869/')}
            src={facebook}
            className={styles.facebook}
          />
          <Image
            onClick={() => this.props.openLink('twitter')}
            src={twitter}
            className={styles.twitter}
          />
          <Image
            onClick={() => this.props.openLink('https://www.linkedin.com/company/14586067')}
            src={linkedIn}
            className={styles.linkedIn}
          />
        </Flex>
        <Text className={styles.copyRight}>{copyright}</Text>
      </Flex>
    );
  }
}
