import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';

export default class ToggleIconButton extends Component {
  static propTypes = {
    iconToggled: PropTypes.element.isRequired,
    iconUntoggled: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  state = {
    toggled: false,
  };

  render() {
    const {
      iconToggled, iconUntoggled, label, color, onClick,
    } = this.props;

    const {
      toggled,
    } = this.state;

    return (
      <IconButton
        onClick={() => { this.setState({ toggled: !toggled }); onClick(); }}
        color="default"
        style={{ color }}
        aria-label={label}
      >
        {toggled ? iconToggled : iconUntoggled}
      </IconButton>
    );
  }
}
