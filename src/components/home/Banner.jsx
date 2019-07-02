import React, { PureComponent } from 'react';

import { Flex, Text } from '../../design/components/index';
import { getObjectClassNames } from '../../design/utils/designUtils';
import { mediaQueries } from '../../design/utils/designSystem';

const classes = getObjectClassNames({
  top: {
    padding: '0px 84px',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    [mediaQueries.phone]: {
      padding: '0px 12px'
    }
  },
  title: {
    fontSize: '50px',
    color: '#fff',
    textAlign: 'center',
    [mediaQueries.phone]: {
      fontSize: '26px',
      textAlign: 'left'
    }
  },
  description: {
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
    marginTop: '10px',
    width: '50%',
    [mediaQueries.phone]: {
      fontSize: '14px',
      width: '100%',
      marginTop: '6px',
      textAlign: 'left'
    }
  }
});

const title = 'Spraying and monitoring fields made easy';
const description =
  'Our Drone monitoring and spraying technology helps you to increase crop yield and efficient spraying';

export default class Banner extends PureComponent {
  render() {
    return (
      <Flex className={classes.top}>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.description}>{description}</Text>
      </Flex>
    );
  }
}
