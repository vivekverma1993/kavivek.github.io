import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Flex from './Flex';
import Text from './Text';
import { getObjectClassNames } from '../utils/designUtils';

const classes = getObjectClassNames({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  entity: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10px',
    minWidth: 80
  },
  title: {
    fontFamily: 'Alex Brush',
    fontSize: 32,
    fontWeight: 500
  },
  subTitle: {
    fontFamily: 'Alex Brush',
    fontSize: 32,
    fontWeight: 500
  }
});

class Countdown extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired
  };

  static defaultProps = {
    date: new Date()
  };

  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown = endDate => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  stop = () => {
    clearInterval(this.interval);
  };

  addLeadingZeros = value => {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  renderTimeEntity = (title, subTitle) => (
    <Flex className={classes.entity}>
      <Text className={classes.title}>{title}</Text>
      <Text className={classes.subTitle}>{subTitle}</Text>
    </Flex>
  );

  render() {
    const countDown = this.state;

    return (
      <Flex className={classes.container}>
        {this.renderTimeEntity(
          this.addLeadingZeros(countDown.days),
          countDown.days === 1 ? 'Day' : 'Days'
        )}
        {this.renderTimeEntity(this.addLeadingZeros(countDown.hours), 'Hours')}
        {this.renderTimeEntity(this.addLeadingZeros(countDown.min), 'Min')}
        {this.renderTimeEntity(this.addLeadingZeros(countDown.sec), 'Sec')}
      </Flex>
    );
  }
}

export default Countdown;
