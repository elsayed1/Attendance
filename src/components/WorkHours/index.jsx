import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const HeaderTypoGraphy = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Typography variant="h2" fontWeight="bold" whiteSpace="nowrap" color="white">
      {children}
    </Typography>
  </ThemeProvider>
);

const WorkHours = ({ expectedHours, actualHours }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-evenly">
        <HeaderTypoGraphy>Expected Hours :</HeaderTypoGraphy>
        <HeaderTypoGraphy>{expectedHours}</HeaderTypoGraphy>
      </Grid>
      <Grid item container justifyContent="space-evenly">
        <HeaderTypoGraphy>Actual Hours :</HeaderTypoGraphy>
        <HeaderTypoGraphy>{actualHours}</HeaderTypoGraphy>
      </Grid>
    </Grid>
  );
};

WorkHours.defaultProps = {
  expectedHours: '',
  actualHours: ''
};

WorkHours.propTypes = {
  expectedHours: PropTypes.number,
  actualHours: PropTypes.number
};
export default WorkHours;
