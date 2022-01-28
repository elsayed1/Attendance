import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { getCurrentTime } from '../../helpers';

const InputTime = ({ label, onChange, value }) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      type="time"
      InputLabelProps={{
        shrink: true
      }}
      inputProps={{
        step: 300 // 5 min
      }}
      sx={{ width: 250 }}
    />
  );
};

InputTime.defaultProps = {
  value: getCurrentTime()
};

InputTime.propTypes = {
  /**
   * Input shown label
   */
  label: PropTypes.string.isRequired,
  /**
   * Value of the input
   */
  value: PropTypes.string,
  /**
   * Input onChange function
   */
  onChange: PropTypes.func.isRequired
};

export default InputTime;
