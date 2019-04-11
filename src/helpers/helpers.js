/* eslint-disable max-len */
export const combineClasses = (...args) => [...args].join(' ');

export const isStringImage = urlString => urlString.includes('/static/media/');

export const isStringEmoji = (string) => {
  const ranges = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
    ' ', // Also allow spaces
  ].join('|');

  const removeEmoji = str => str.replace(new RegExp(ranges, 'g'), '');

  const isOnlyEmojis = str => !removeEmoji(str).length;

  return isOnlyEmojis(string);
};


export const computeTypingDuration = (content) => {
  if (isStringImage(content) || isStringEmoji(content)) {
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
