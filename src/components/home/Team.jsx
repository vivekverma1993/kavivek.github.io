import React, { PureComponent } from 'react';

import {
  Flex,
  Text,
  Image,
  FlexContainer,
  FlexItem
} from '../../design/components/index';
import { classes } from '../commonCss';
import { getObjectClassNames } from '../../design/utils/designUtils';

const nain = require('../../resources/team/nain.jpeg');
const verma = require('../../resources/team/verma.jpeg');
const yashbir = require('../../resources/team/yashbir.jpeg');

const teamClasses = getObjectClassNames({
  person: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    height: '200px',
    width: '180px',
    objectFit: 'cover',
    borderRadius: '2px',
    cursor: 'pointer'
  },
  name: {
    fontSize: '20px',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '10px'
  },
  designation: {
    fontSize: '18px',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '5px'
  }
});

const team = [
  {
    image: yashbir,
    name: 'Yashbir Singh',
    designation: 'Co-Founder'
  },
  {
    image: verma,
    name: 'Vivek Verma',
    designation: 'Co-Founder'
  },
  {
    image: nain,
    name: 'Vivek Nain',
    designation: 'Co-Founder'
  }
];

const teamDescription =
  'We are a passionate team of engineers working towards smart and better agricultural solutions';

export default class Team extends PureComponent {
  renderPerson = (person, index) => {
    return (
      <FlexItem md={4} key={`person--${index}`} className={teamClasses.person}>
        <Image className={teamClasses.image} src={person.image} />
        <Text className={teamClasses.name}>{person.name}</Text>
        <Text className={teamClasses.designation}>{person.designation}</Text>
      </FlexItem>
    );
  };

  render() {
    return (
      <Flex className={classes.container}>
        <Flex className={classes.content}>
          <Text className={classes.title}>Team</Text>
          <FlexContainer className={classes.contentContainer}>
            {team.map((person, index) => this.renderPerson(person, index))}
          </FlexContainer>
          <Text className={classes.description}>{teamDescription}</Text>
        </Flex>
      </Flex>
    );
  }
}
