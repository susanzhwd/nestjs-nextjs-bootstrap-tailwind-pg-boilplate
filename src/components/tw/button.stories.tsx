import * as React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      description: 'The type of button',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary'],
      },
    },
    isSmall: {
      description: 'A small version of the button',
      type: 'boolean',
    },
    children: {
      description: 'The button content',
      defaultValue: 'Button',
      type: { name: 'text', required: true },
    },
  },
};

// export const withText = () => <Button>Hello Button</Button>;

// export const withEmoji = () => <Button>Click me please</Button>;

const Template = (props) => <Button {...props} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };

export const Small = Template.bind({});
Small.args = { isSmall: true };

// export const withFillPrimary = () => (
//   <FillButton brand="primary">Primary</FillButton>
// );
// export const withFillSecondary = () => (
//   <FillButton brand="secondary">Secondary</FillButton>
// );
// export const withFillSmall = () => (
//   <FillButton brand="danger">Danger</FillButton>
// );
