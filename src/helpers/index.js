import { MINUTES_IN_HOUR } from '../constants';

const getCurrentTime = () =>
  `${new Date().getHours().toString().padStart(2, '0')}:${new Date()
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

const convertHoursToMinutes = (time) =>
  time
    .split(':')
    .map((part, index) => {
      if (index === 0) return Number(part) * 60;
      return Number(part);
    })
    .reduce((prev, cur) => prev + cur);

const getWorkingMinutesInDay = (day) => {
  const arriveTimeInMinutes = convertHoursToMinutes(day.arriveTime);
  const exitTimeInMinutes = convertHoursToMinutes(day.exitTime);
  const totalWorkingMinutes = exitTimeInMinutes - arriveTimeInMinutes - day.launchTime || 0;
  return totalWorkingMinutes;
};

const convertMinutesToHours = (minutes) => {
  const hours = Math.floor(Math.abs(minutes / MINUTES_IN_HOUR));
  const mins = minutes % MINUTES_IN_HOUR;
  return `${hours}:${mins}`;
};

export { getWorkingMinutesInDay, convertHoursToMinutes, getCurrentTime, convertMinutesToHours };
