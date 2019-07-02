import React, { PureComponent } from 'react';

import { Flex, Text } from '../../design/components/index';
import { classes } from '../commonCss';

export default class Products extends PureComponent {
  render() {
    return (
      <Flex className={classes.container}>
        <Flex className={classes.content}>
          <Text className={classes.title}>Products</Text>
          <Flex className={classes.contentContainer} />
        </Flex>
      </Flex>
    );
  }
}
