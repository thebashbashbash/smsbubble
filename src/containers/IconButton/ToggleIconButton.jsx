import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';

const ToggleIconButton = ({
  iconToggled, iconUntoggled, label, color, onClick, toggled,
}) => (
  <IconButton
    onClick={() => { onClick(); }}
    color="default"
    style={{ color }}
    aria-label={label}
  >
    {toggled ? iconToggled : iconUntoggled}
  </IconButton>
);


ToggleIconButton.propTypes = {
  iconToggled: PropTypes.element.isRequired,
  iconUntoggled: PropTypes.element.isRequired,
  toggled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleIconButton;
