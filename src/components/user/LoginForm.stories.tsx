import { storiesOf } from '@storybook/react';
import * as React from 'react';
import LoginForm from './LoginForm';

storiesOf('Login Form', module).add('with text', () => {
  return (
    <LoginForm
      onSignUp={() => {
        console.log('OnSignUp');
      }}
    />
  );
});
