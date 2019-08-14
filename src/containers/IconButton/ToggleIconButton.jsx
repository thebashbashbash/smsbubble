import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';

const ToggleIconButton = (props) => {
  const {
    iconToggled, iconUntoggled, label, iconColor, onClick, toggled, ...other
  } = props;
  return (
    <IconButton
      {...other}
      onClick={() => { onClick(); }}
      style={{ color: iconColor }}
      aria-label={label}
    >
      {toggled ? iconToggled : iconUntoggled}
    </IconButton>

  );
};


ToggleIconButton.propTypes = {
  iconToggled: PropTypes.element.isRequired,
  iconUntoggled: PropTypes.element.isRequired,
  toggled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleIconButton;
