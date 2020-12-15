import { storiesOf } from '@storybook/react';
import * as React from 'react';
import SignUpForm from './Form';

storiesOf('SignUp Form old', module).add('with text', () => {
  return (
    <SignUpForm
      onSignIn={() => {
        console.log('onSignIn');
      }}
    />
  );
});
