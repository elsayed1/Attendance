import React from 'react';
import WorkHours from '../components/WorkHours';

export default {
  title: 'Example/WorkHours',
  component: WorkHours,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args) => <WorkHours {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  actualHours: 12,
  expectedHours: 20
};
