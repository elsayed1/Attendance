import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid } from '@mui/material';
import { toast } from 'react-toastify';

import { StyledTableCell, StyledTableRow } from '../../components/Table';
import { getWorkDays } from '../../services';
import { useUserAuth } from '../../context/UserAuthContext';
import { convertMinutesToHours, getWorkingMinutesInDay } from '../../helpers';
import { DAYS_IN_WEEK } from '../../constants';
import StyledCircularProgress from '../../components/StyledCircularProgress';

const WorkingHours = () => {
  const { user } = useUserAuth();
  const [workingDays, setWorkingDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getWorkingDays = async () => {
      try {
        const response = await getWorkDays(user.uid);
        setWorkingDays(response.slice(-DAYS_IN_WEEK));
      } catch (e) {
        toast.error('sorry, try again later');
      }
      setIsLoading(false);
    };

    getWorkingDays();
  }, [user.uid]);

  return (
    <Box p={5}>
      <TableContainer component={Paper}>
        {isLoading ? (
          <Box p={5} component={Grid} container justifyContent="center">
            <StyledCircularProgress />
          </Box>
        ) : (
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Employee Name</StyledTableCell>
                <StyledTableCell align="center">Check In</StyledTableCell>
                <StyledTableCell align="center">Check Out</StyledTableCell>
                <StyledTableCell align="center">Break Time</StyledTableCell>
                <StyledTableCell align="center">Worked Hours</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workingDays.map((day) => (
                <StyledTableRow key={day.id}>
                  <StyledTableCell>{user.displayName}</StyledTableCell>
                  <StyledTableCell align="center">{day.arriveTime}</StyledTableCell>
                  <StyledTableCell align="center">{day.exitTime}</StyledTableCell>
                  <StyledTableCell align="center">{day.launchTime}</StyledTableCell>
                  <StyledTableCell align="center">
                    {convertMinutesToHours(getWorkingMinutesInDay(day))}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Box>
  );
};
export default WorkingHours;
