/* eslint-disable max-len */
export const combineClasses = (...args) => [...args].join(' ');

export const computeTypingDuration = (content) => {
  if (content.includes('/static/media/')) {
    return 0;
  }

  const typingSpeed = 2.5;
  const minTypingDuration = 1700;

  const computedTypingDuration = Math.round(
    typingSpeed * (1 / 10) * 1000 * parseInt(content.split(' ').length, 10),
  );

  return computedTypingDuration > minTypingDuration ? computedTypingDuration : minTypingDuration;
};

// eslint-disable-next-line max-len
export const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
