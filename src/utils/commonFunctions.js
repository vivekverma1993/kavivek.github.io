import moment from 'moment';
import queryString from 'qs';

import { FACEBOOK_LINK, TWITTER_LINK, INSTAGRAM_LINK } from './links';

export function getShortDate(date) {
  if (!date) return '';

  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth() + 1;

  const checkDate = Number(moment(date * 1000).format('DD'));
  const checkMonth = Number(moment(date * 1000).format('MM'));
  let timeString = '';

  if (Math.abs(checkDate - todayDate) === 0) {
    if (Math.abs(todayMonth - checkMonth) === 0) {
      timeString = moment.unix(date).fromNow();
    } else if (Math.abs(todayMonth - checkMonth) === 1) {
      timeString = moment.unix(date).format('D MMM');
    } else if (Math.abs(todayMonth - checkMonth) > 1) {
      timeString = moment.unix(date).format('D MMM');
    }
  } else if (Math.abs(checkDate - todayDate) === 1) {
    if (Math.abs(todayMonth - checkMonth) === 0) {
      timeString = moment.unix(date).fromNow();
    } else if (Math.abs(todayMonth - checkMonth) === 1) {
      timeString = moment.unix(date).format('D MMM');
    } else if (Math.abs(todayMonth - checkMonth) > 1) {
      timeString = moment.unix(date).format('D MMM');
    }
  } else if (Math.abs(checkDate - todayDate) === 2) {
    if (Math.abs(todayMonth - checkMonth) === 0) {
      timeString = moment.unix(date).fromNow();
    } else if (Math.abs(todayMonth - checkMonth) === 1) {
      timeString = moment.unix(date).format('D MMM');
    } else if (Math.abs(todayMonth - checkMonth) > 1) {
      timeString = moment.unix(date).format('D MMM');
    }
  } else if (Math.abs(checkDate - todayDate) > 2) {
    if (Math.abs(todayMonth - checkMonth) >= 0) {
      timeString = moment.unix(date).format('D MMM');
    }
  } else {
    timeString = moment.unix(date).fromNow();
  }

  return timeString;
}

export function openLink(url) {
  const win = window.open(url, '_blank');
  win.focus();
}

export function openSocialLink(app) {
  if (app === 'facebook') {
    openLink(FACEBOOK_LINK);
  } else if (app === 'twitter') {
    openLink(TWITTER_LINK);
  } else if (app === 'instagram') {
    openLink(INSTAGRAM_LINK);
  }
}

export function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  return 'unknown';
}

export function redirectLinkOnDevice() {
  const operatingSystem = getMobileOperatingSystem();
  if (operatingSystem === 'Android') {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.ikinaki&hl=en';
  } else if (operatingSystem === 'iOS') {
    window.location.href =
      'itms://itunes.apple.com/in/app/ikinaki/id1268241164?ls=1&mt=8';
  }
}

export function parseString(str) {
  return queryString.parse(str, {
    strictNullHandling: true,
    ignoreQueryPrefix: true
  });
}

export const ColorWithOpacity = (color, opacity) => {
  let hexOpacity = Math.floor(opacity * 255);
  hexOpacity = hexOpacity.toString(16);
  return `${color}${hexOpacity}`;
};
