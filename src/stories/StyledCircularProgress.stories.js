import React from 'react';
import StyledCircularProgress from '../components/StyledCircularProgress';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/StyledCircularProgress',
  component: StyledCircularProgress
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StyledCircularProgress {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Click'
};
