/* eslint-disable max-len */
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


export const computeTypingDuration = (content) => {
  if (isStringImage(content) || isStringEmoji(content)) {
    return 0;
  }

  const typingSpeed = 1.9; // lower quicker, higher slower
  const minTypingDuration = 600;

  const computedTypingDuration = Math.round(
    typingSpeed * (1 / 10) * 1000 * parseInt(content.split(' ').length, 10),
  );

  return computedTypingDuration > minTypingDuration ? computedTypingDuration : minTypingDuration;
};

// eslint-disable-next-line max-len
export const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
