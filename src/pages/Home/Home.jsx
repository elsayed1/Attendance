import React, { useEffect, useState } from 'react';
import { Paper, Grid, Box, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';

import InputTime from '../../components/InputTime';
import Button from '../../components/LoadableButton';

import { useUserAuth } from '../../context/UserAuthContext';

import { getWorkDays, updateWorkedHours } from '../../services';

import WorkHours from '../../components/WorkHours';
import { DAILY_WORKING_HOURS, MINUTES_IN_HOUR } from '../../constants';
import { getCurrentTime, getWorkingMinutesInDay } from '../../helpers';

const Home = () => {
  const { user } = useUserAuth();

  const [hours, setHours] = useState({ actual: null, expected: null });

  const [arriveTime, setArriveTime] = useState(getCurrentTime());
  const [exitTime, setExitTime] = useState(getCurrentTime());
  const [launchTime, setLaunchTime] = useState('');
  const [isLoading, setIsLoading] = useState({ break: false, checkout: false });

  const handleAddWorkingHours = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, checkout: true }));
      await updateWorkedHours(user.uid, { arriveTime, exitTime, userId: user.uid });
      toast.success('Add successfully');
    } catch (e) {
      toast.error('sorry, try again later');
    }
    setIsLoading((prev) => ({ ...prev, checkout: false }));
  };

  const handleTakeBreak = async () => {
    if (!launchTime) return toast.info('Please insert time for the break');
    try {
      setIsLoading((prev) => ({ ...prev, break: true }));
      await updateWorkedHours(user.uid, { launchTime });
      toast.success('Add successfully');
    } catch (e) {
      toast.error('sorry, try again later');
    }
    setIsLoading((prev) => ({ ...prev, break: false }));
    return setLaunchTime('');
  };

  useEffect(() => {
    const getWorkingDays = async () => {
      try {
        const workingDays = await getWorkDays(user.uid);
        const totalWorkingMinutes = workingDays
          .map(getWorkingMinutesInDay)
          .reduce((prev, cur) => prev + cur, 0);
        const totalWorkingHours = Math.floor(totalWorkingMinutes / MINUTES_IN_HOUR);
        setHours({ actual: totalWorkingHours, expected: workingDays.length * DAILY_WORKING_HOURS });
      } catch (e) {
        toast.error('sorry, try again later');
      }
    };

    getWorkingDays();
  }, [user.uid]);

  return (
    <Grid container direction="column" spacing={1} component={Box} mt={5}>
      <Grid item>
        <WorkHours expectedHours={hours.expected} actualHours={hours.actual} />
      </Grid>
      <Grid
        item
        container
        style={{ flexGrow: 1 }}
        justifyContent="space-evenly"
        alignItems="center">
        <Paper elevation={20} component={Box} p={3} m={2}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <InputTime value={arriveTime} label="Arriving Time" onChange={setArriveTime} />
            </Grid>
            <Grid item>
              <InputTime value={exitTime} label="Exiting Time" onChange={setExitTime} />
            </Grid>
            <Grid item>
              <Button
                isLoading={isLoading.checkout}
                label="Loading"
                variant="contained"
                onClick={handleAddWorkingHours}
                fullWidth>
                Check out
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={20} component={Box} p={5}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h5" align="center">
                Launch Time
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                type="number"
                value={launchTime}
                label="Minute"
                onChange={(e) => setLaunchTime(e.target.value)}
                sx={{ width: 250 }}
              />
            </Grid>
            <Grid item>
              <Button
                isLoading={isLoading.break}
                variant="contained"
                onClick={handleTakeBreak}
                fullWidth>
                Take Break
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
