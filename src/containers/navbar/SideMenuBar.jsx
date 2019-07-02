import React, { Component } from 'react';
import PropTypes from 'prop-types';
import People from '@material-ui/icons/AccountCircle';
import RightArrow from '@material-ui/icons/KeyboardArrowRight';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';

import { Flex, Text, Image } from '../../design/components/index';
import { getObjectClassNames } from '../../design/utils/designUtils';
import Facebook from '../../resources/social/facebookPurple.svg';
import Twitter from '../../resources/social/twitterPurple.svg';
import Instagram from '../../resources/social/instagramPurple.svg';
import Dummy from '../../design/components/Dummy';

const styles = getObjectClassNames({
  container: {
    overflowY: 'scroll',
    height: '100%'
  },
  subContainer: {
    flexDirection: 'column',
    height: 'auto'
  },
  topRow: {
    flexDirection: 'row',
    height: '60px',
    padding: '18px 24px',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  loggedInTopRow: {
    flexDirection: 'row',
    height: '60px',
    padding: '18px 24px',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '14px',
    color: '#2c2c2c'
  },
  button: {
    fontSize: '14px',
    color: '#2c2c2c',
    cursor: 'pointer'
  },
  people: {
    fontSize: '24px',
    color: '#9b9b9b'
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: '14px'
  },
  horizontalLine: {
    height: '1px',
    backgroundColor: '#ebebeb',
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    height: '48px',
    padding: '18px 24px',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  rowTitle: {
    fontSize: '16px',
    color: '#2c2c2c',
    fontWeight: '300'
  },
  footer: {
    flexDirection: 'column',
    width: '100%',
    padding: '18px 24px'
  },
  footerText: {
    fontSize: '14px',
    lineHeight: '28px',
    color: '#484848'
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'auto',
    marginTop: '24px'
  },
  socialIcon: {
    widht: '30px',
    height: '30px',
    color: '#b9a3d9',
    marginRight: '16px'
  },
  optionsContainer: {
    paddingLeft: '24px',
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  optionsRow: {
    flexDirection: 'row',
    height: '48px',
    padding: '0px 24px',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: '1px',
    borderBottomColor: '#ebebeb'
  },
  optionsText: {
    fontSize: '12px',
    color: '#484848'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer'
  },
  userName: {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#484848'
  },
  avatar: {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    marginRight: '8px',
    objectFit: 'cover'
  },
  logoutButton: {
    justifyContent: 'flex-end',
    cursor: 'pointer'
  }
});

const footerOptions = [
  { title: 'Chat with Us', key: 'chat' },
  { title: 'Contact Us', key: 'contact' },
  { title: `FAQ's`, key: 'faq' },
  { title: 'Terms & Condition', key: 'tandc' },
  { title: 'Privacy Policy', key: 'privacy' }
];

const categories = [
  {
    title: 'Face Care'
  },
  {
    title: 'Body Care'
  },
  {
    title: 'Hair Care'
  },
  {
    title: 'Bath & Shower'
  },
  {
    title: 'Make Up'
  },
  {
    title: 'Fragrances'
  },
  {
    title: 'Health Food'
  },
  {
    title: 'Teas'
  },
  {
    title: 'Nutrition'
  },
  {
    title: 'Gym Supplements'
  }
];

export default class SideMenuBar extends Component {
  static propTypes = {
    user: PropTypes.object,
    onRowClick: PropTypes.func,
    onNavClick: PropTypes.func,
    onLogout: PropTypes.func
  };

  static defaultProps = {
    user: {},
    onRowClick: () => {},
    onNavClick: () => {},
    onLogout: () => {}
  };

  state = {
    catgeoryOpen: false
  };

  renderHorizontalLine = () => <Flex className={styles.horizontalLine} />;

  renderTopRow = loggedIn => {
    return !loggedIn ? (
      <Flex className={styles.topRow}>
        <People className={styles.people} />
        <Flex className={styles.textContainer}>
          <Text className={styles.title}>Hi Guest</Text>
          <Flex row>
            <Text
              onClick={() => this.props.onNavClick('/login')}
              className={styles.button}
            >
              Login&nbsp;|
            </Text>
            <Text
              onClick={() => this.props.onNavClick('/signup')}
              className={styles.button}
            >
              &nbsp;Sign Up
            </Text>
          </Flex>
        </Flex>
      </Flex>
    ) : (
      <Flex className={styles.loggedInTopRow}>
        <Flex className={styles.profile}>
          <Image className={styles.avatar} src={this.props.user.url} />
          <Text className={styles.userName}>
            {this.props.user.details.name}
          </Text>
        </Flex>
        <Flex className={styles.logoutButton} onClick={this.props.onLogout}>
          <Text>Log out</Text>
        </Flex>
      </Flex>
    );
  };

  renderRow = (title, showArrow, onClick, options = [], open) => {
    return (
      <Flex className={styles.row} onClick={onClick}>
        <Text className={styles.rowTitle}>{title}</Text>
        {showArrow ? open ? <DownArrow /> : <RightArrow /> : null}
      </Flex>
    );
  };

  renderSideFooter = () => {
    return (
      <Flex className={styles.footer}>
        {footerOptions.map((option, index) => (
          <Text
            key={`footer---options---${index}`}
            onClick={() => this.props.onRowClick(option.key)}
            className={styles.footerText}
          >
            {option.title}
          </Text>
        ))}
        <Flex className={styles.socialContainer}>
          <Image src={Facebook} className={styles.socialIcon} />
          <Image src={Twitter} className={styles.socialIcon} />
          <Image src={Instagram} className={styles.socialIcon} />
        </Flex>
      </Flex>
    );
  };

  renderOptions = options => {
    return (
      <Flex className={styles.optionsContainer}>
        {options.map((option, index) => {
          const onClick = options.onClick ? options.onClick : () => {};
          return (
            <Dummy css={{ width: '100%' }}>
              <Flex
                key={`category---${index}`}
                className={styles.optionsRow}
                onClick={onClick}
              >
                <Text className={styles.optionsText}>{option.title}</Text>
              </Flex>
              {this.renderHorizontalLine()}
            </Dummy>
          );
        })}
      </Flex>
    );
  };

  render() {
    const { user, onNavClick } = this.props;
    const { catgeoryOpen } = this.state;
    const loggedIn = user && user.userId;
    return (
      <Flex className={styles.container}>
        <Flex className={styles.subContainer}>
          {this.renderTopRow(loggedIn)}
          {this.renderHorizontalLine()}
          {this.renderRow('Search', false, () => onNavClick('/search'))}
          {this.renderHorizontalLine()}
          {this.renderRow(
            'Categories',
            true,
            () => {
              this.setState({ catgeoryOpen: !catgeoryOpen });
            },
            [],
            catgeoryOpen
          )}
          {this.renderHorizontalLine()}
          {catgeoryOpen ? this.renderOptions(categories) : null}
          {this.renderRow('Blogs', false, () => {})}
          {this.renderHorizontalLine()}
          {this.renderRow('Press', false, () => {})}
          {this.renderHorizontalLine()}
          {this.renderSideFooter()}
        </Flex>
      </Flex>
    );
  }
}
