import { computeTypingDuration } from '../../helpers/helpers';

const computeMessageSentAtCumulativeTime = (children, messageDelay) => (children instanceof Array
  ? children
    .map(child => computeTypingDuration(child.props.children))
    .reduce(
      (previous, current, index) => {
        previous.push((previous[index] || 0) + current + messageDelay[index]);
        return previous;
      },
      [0],
    )
  : computeTypingDuration(children.props.children));

export default computeMessageSentAtCumulativeTime;
