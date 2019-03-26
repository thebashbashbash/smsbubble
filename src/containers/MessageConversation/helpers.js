import { computeTypingSpeed, getRandomInt } from '../../helpers/helpers';

/* eslint-disable no-nested-ternary */
export const messageDelayMinDefault = 700;
export const messageDelayMaxDefault = 2000;

export const computeMessageDeley = (
  children,
  messageDelayMin = messageDelayMinDefault,
  messageDelayMax = messageDelayMaxDefault,
) => (children instanceof Array
  ? children
    .map(child => child.props.children)
    .map(element => element.map(subElement => subElement.props.children))
    .map(element => element.map(() => getRandomInt(messageDelayMin, messageDelayMax)))
  : children.props.children instanceof Array
    ? children.props.children.map(() => getRandomInt(messageDelayMin, messageDelayMax))
    : getRandomInt(messageDelayMin, messageDelayMax));

export const computeConversationStartDeley = (
  messageDelayMin = messageDelayMinDefault / 2,
  messageDelayMax = messageDelayMaxDefault / 2,
) => getRandomInt(messageDelayMin / 2, messageDelayMax / 2);

export const computeMessageContainerTimeDeley = children => (children instanceof Array
  ? children
    .map(child => child.props.children)
    .map(element => element.map(subElement => subElement.props.children))
    .map(element => element.map(subElement => computeTypingSpeed(subElement)))
    .map(element => element.reduce((a, b) => a + b, 0))
    .reduce(
      (previous, current, index) => {
        previous.push((previous[index] || 0) + current);
        return previous;
      },
      [0],
    )
    .slice(0, -1)
  : [0]);

export const computeAccumulatedMessageDeley = (messageDelay, index) => messageDelay
  .map(element => element.reduce((a, b) => a + b, 0))
  .reduce(
    (previous, current, subIndex) => {
      previous.push((previous[subIndex] || 0) + current);
      return previous;
    },
    [0],
  )[index];
