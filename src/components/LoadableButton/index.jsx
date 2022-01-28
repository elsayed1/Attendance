import React from 'react';
import { CircularProgress, Button } from '@mui/material';

const LoadableButton = ({ isLoading, children, ...rest }) => {
  return (
    <Button {...rest}>
      {isLoading && <CircularProgress color="inherit" size={20} />}
      {children}
    </Button>
  );
};

export default LoadableButton;
