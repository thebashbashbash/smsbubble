/* eslint-disable max-len */
import moment from 'moment';

export const combineClasses = (...args) => [...args].join(' ');

export const isStringImage = urlString => /\/static\/media\/.+\.(gif|jpg|jpeg|tiff|png)$/.test(urlString);

export const isStringEmoji = (string) => {
  const ranges = [
    '\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]',
    ' ', // Also allow spaces
  ].join('|');

  const removeEmoji = str => str.replace(new RegExp(ranges, 'g'), '');

  const isOnlyEmojis = str => !removeEmoji(str).length;

  return isOnlyEmojis(string);
};

export const decamelize = (str) => {
  const result = str.replace(/([A-Z])/g, ' $1');
  return result.charAt(0) + result.slice(1).toLowerCase();
};

export const propName = f => /\.([^.;]+);?\s*\}$/.exec(f.toString())[1];


export const computeTypingDuration = (content) => {
  if (isStringImage(content) || isStringEmoji(content)) {
    return 0;
  }

  const typingSpeed = 1.7; // lower quicker, higher slower
  const minTypingDuration = 600;

  const computedTypingDuration = Math.round(
    typingSpeed * (1 / 10) * 1000 * parseInt(content.split(' ').length, 10),
  );

  return computedTypingDuration > minTypingDuration ? computedTypingDuration : minTypingDuration;
};

// eslint-disable-next-line max-len
export const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

export const elapsedYearsBetweenTwoDates = (startDate, endDate) => {
  let start = moment();
  if (startDate.toLowerCase() !== 'now') {
    start = moment(startDate.replace(/\//ig, '-'));
  }

  let end = moment();
  if (endDate.toLowerCase() !== 'now') {
    end = moment(endDate.replace(/\//ig, '-'));
  }

  return Math.round(end.diff(start, 'years', true) * 100) / 100;
};

export const splitDateRangeToArray = dateRange => dateRange.replace(/ - /g, '--').split('--');

export const isDayTime = () => (new Date().getHours()) > 6 && (new Date().getHours()) < 19;
