/* eslint-disable max-len */
export const combineClasses = (...args) => [...args].join(' ');

export const computeTypingSpeed = (content) => {
  const typingSpeed = 4;
  return Math.round(typingSpeed * (1 / 10) * 1000 * parseInt(content.split(' ').length, 10));
};

// eslint-disable-next-line max-len
export const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
