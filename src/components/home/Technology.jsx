import React, { PureComponent } from 'react';

import {
  Flex,
  Text,
  Image,
  FlexContainer,
  FlexItem
} from '../../design/components/index';
import { classes as commonClasses } from '../commonCss';
import { getObjectClassNames } from '../../design/utils/designUtils';

const drone = require('../../resources/drone.png');
const efficiency = require('../../resources/efficiency.png');
const lowWastage = require('../../resources/low_wastage.png');

const classes = getObjectClassNames({
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  techContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20
  },
  techIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  techIcon: {
    width: 60,
    height: 60,
    objectFit: 'cover'
  },
  techText: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '10px'
  }
});

const tech = [
  {
    id: 'drone',
    image: drone,
    text: 'Acccurate Spraying of pesticide with drones'
  },
  {
    id: 'efficiency',
    image: efficiency,
    text: 'Pesticide used efficiently nourishing each plant'
  },
  {
    id: 'Low wastage',
    image: lowWastage,
    text: 'Reduce wastage of pesticides and other medicines'
  }
];

export default class Technology extends PureComponent {
  renderTech = (t, index) => {
    return (
      <FlexItem
        className={classes.techContainer}
        md={4}
        key={`tech--${t.id}---${index}`}
      >
        <Flex className={classes.techIconContainer}>
          <Image src={t.image} className={classes.techIcon} />
        </Flex>
        <Text className={classes.techText}>{t.text}</Text>
      </FlexItem>
    );
  };

  render() {
    return (
      <Flex className={commonClasses.container}>
        <Flex className={commonClasses.content}>
          <Text className={commonClasses.title}>Technology</Text>
          <FlexContainer className={classes.data}>
            {tech.map((t, index) => {
              return this.renderTech(t, index);
            })}
          </FlexContainer>
        </Flex>
      </Flex>
    );
  }
}
