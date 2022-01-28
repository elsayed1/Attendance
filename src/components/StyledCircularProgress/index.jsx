import { Grid, Box, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const StyledCircularProgress = ({ padding, color, ...rest }) => {
  return (
    <Box p={padding} component={Grid} container justifyContent="center" c>
      <CircularProgress {...rest} color={color} />
    </Box>
  );
};
StyledCircularProgress.defaultProps = { padding: 5, color: 'primary' };

StyledCircularProgress.propTypes = {
  padding: PropTypes.number,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'error', 'warning'])
};

export default StyledCircularProgress;
