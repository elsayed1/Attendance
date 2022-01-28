import { TableHead } from '@mui/material';
import React from 'react';
import { StyledTableCell, StyledTableRow } from '../components/Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/StyledTableRow',
  component: StyledTableRow
};
const header = ['Name', 'CheckIN', 'CheckOut', 'Time'];
const rows = [
  { name: 'Sayed', checkIn: '12:10', checkOut: '5:10', time: '5:00' },
  { name: 'Sayed', checkIn: '12:5', checkOut: '10:10', time: '5:00' }
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
  <>
    <TableHead>
      <StyledTableRow>
        {header.map((col) => (
          <StyledTableCell>{col}</StyledTableCell>
        ))}
      </StyledTableRow>
    </TableHead>
    {rows.map((row) => (
      <StyledTableRow>
        <StyledTableCell>{row.name}</StyledTableCell>
        <StyledTableCell>{row.checkIn}</StyledTableCell>
        <StyledTableCell>{row.checkOut}</StyledTableCell>
        <StyledTableCell>{row.time}</StyledTableCell>
      </StyledTableRow>
    ))}
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Click'
};
