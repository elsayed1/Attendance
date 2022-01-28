import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Button } from '@mui/material';

const LoadableButton = ({ isLoading, children, onClick, ...rest }) => {
  return (
    <Button onClick={onClick} {...rest}>
      {isLoading && <CircularProgress color="inherit" size={20} />}
      {children}
    </Button>
  );
};

LoadableButton.defaultProps = {
  isLoading: false
};

LoadableButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default LoadableButton;
