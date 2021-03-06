/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import posed from 'react-pose';
import { animateScroll as scroll } from 'react-scroll';

import { computeTypingDuration, isStringImage, isStringEmoji } from '../../helpers/helpers';
import Bubble, { ColorType, TailType } from '../../components/bubble/bubble';
import LoadingIndicator from '../../components/loadingIndicator/loadingIndicator';

export const SubjectType = {
  Me: 'me',
  You: 'you',
};

export const StatusType = {
  IsHidden: 'isHidden',
  IsTyping: 'isTyping',
  IsSentWithoutTail: 'IsSentWithoutTail',
  IsSentWithTail: 'IsSentWithTail',
};

const MessageBubble = posed.div({
  loading: {
    scale: 1,
    transition: () => ({
      type: 'keyframes',
      values: [1, 1.0253, 1.025],
      duration: 520,
      yoyo: Infinity,
    }),
    delay: 100,
  },
  notLoadingNonImage: {
    scale: 1,
    transition: () => ({
      type: 'keyframes',
      values: [1, 1.026, 1.025, 1],
      duration: 350,
    }),
  },
  notLoadingImage: {
    scale: 1,
    transition: () => ({
      type: 'keyframes',
      values: [1, 1.02, 1],
      duration: 300,
    }),
  },
});

const scrollToBottomAnimationOptions = {
  duration: 350,
  delay: 0,
  smooth: 'easeInQuad',
};

class Message extends React.Component {
  constructor(props) {
    super(props);

    const {
      lastInContainer,
      status,
      subject,
      sentAtCumultiveTime,
      children,
      messageDelay,
      autoscroll,
      interactive,
    } = this.props;
    this.state = {
      autoscroll,
      lastInContainer,
      status,
      messageDelay,
      subject,
      sentAtCumultiveTime,
      interactive,
      content: children,
    };
  }

  render() {
    const {
      subject,
      status,
      sentAtCumultiveTime,
      messageDelay,
      lastInContainer,
      autoscroll,
      interactive,
      content,
    } = this.state;

    if (interactive) {
      if (status === StatusType.IsHidden) {
        setTimeout(() => {
          if (autoscroll) {
            scroll.scrollMore(50, scrollToBottomAnimationOptions);
          }
          this.setState({ status: StatusType.IsTyping });
          setTimeout(() => {
            if (autoscroll) {
              scroll.scrollMore(isStringImage(content) ? 340 : 100, scrollToBottomAnimationOptions);
            }
            this.setState({ status: StatusType.IsSentWithTail });
            if (!lastInContainer) {
              setTimeout(() => {
                this.setState({ status: StatusType.IsSentWithoutTail });
              }, messageDelay);
            }
          }, computeTypingDuration(content));
        }, sentAtCumultiveTime);
      }
    }

    return (
      <MessageBubble
        pose={
          interactive
            ? status === StatusType.IsTyping
              ? 'loading'
              : isStringImage(content)
                ? 'notLoadingImage'
                : 'notLoadingNonImage'
            : 'notLoadingImage'
        }
      >
        <Bubble
          hidden={status === StatusType.IsHidden && interactive}
          tail={
            interactive
              ? status === StatusType.IsTyping
                ? TailType.TrailTail
                : status === StatusType.IsSentWithTail
                  ? TailType.PointerTail
                  : TailType.None
              : lastInContainer
                ? TailType.PointerTail
                : TailType.None
          }
          emojiContent={isStringEmoji(content)}
          imageContent={isStringImage(content)}
          color={subject === SubjectType.Me ? ColorType.Blue : ColorType.Gray}
          animate={interactive}
        >
          {status === StatusType.IsTyping ? (
            <LoadingIndicator
              color={subject === SubjectType.Me ? ColorType.Blue : ColorType.Gray}
            />
          ) : (
            content
          )}
        </Bubble>
      </MessageBubble>
    );
  }
}

Message.propTypes = {
  subject: PropTypes.oneOf([SubjectType.Me, SubjectType.You]),
  messageDelay: PropTypes.number,
  lastInContainer: PropTypes.bool,
  status: PropTypes.oneOf([
    StatusType.IsHidden,
    StatusType.IsTyping,
    StatusType.IsSentWithoutTail,
    StatusType.IsSentWithTail,
  ]),
  sentAtCumultiveTime: PropTypes.number,
  interactive: PropTypes.bool,
  autoscroll: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Message.defaultProps = {
  status: StatusType.IsHidden,
  subject: SubjectType.Me,
  messageDelay: 0,
  sentAtCumultiveTime: 0,
  lastInContainer: false,
  autoscroll: true,
  interactive: false,
  children: '',
};

export default Message;
