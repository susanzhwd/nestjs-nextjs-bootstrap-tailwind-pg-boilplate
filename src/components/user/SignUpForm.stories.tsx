import { storiesOf } from '@storybook/react';
import * as React from 'react';
import SignUpForm from './SignUpForm';

storiesOf('SignUp Form', module).add('with text', () => {
  return (
    <SignUpForm
      onSignIn={() => {
        console.log('onSignIn');
      }}
    />
  );
});
