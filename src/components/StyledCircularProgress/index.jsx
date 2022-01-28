import { Grid, Box, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const StyledCircularProgress = ({ padding, ...rest }) => {
  return (
    <Box p={padding} component={Grid} container justifyContent="center">
      <CircularProgress {...rest} />
    </Box>
  );
};
StyledCircularProgress.defaultProps = { padding: 5 };

StyledCircularProgress.propTypes = {
  padding: PropTypes.number
};

export default StyledCircularProgress;
