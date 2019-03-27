import { computeTypingSpeed } from '../../helpers/helpers';

const computeMessageSentAtCumulativeTime = (children, messageDelay) => (children instanceof Array
  ? children
    .map(child => computeTypingSpeed(child.props.children))
    .reduce(
      (previous, current, index) => {
        previous.push((previous[index] || 0) + current + messageDelay[index]);
        return previous;
      },
      [0],
    )
  : computeTypingSpeed(children.props.children));

export default computeMessageSentAtCumulativeTime;
