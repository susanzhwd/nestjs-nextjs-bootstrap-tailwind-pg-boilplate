import { storiesOf } from '@storybook/react';
import * as React from 'react';
import LoginForm from './Form';

storiesOf('Login Form old', module).add('with text', () => {
  return <LoginForm onSignUp={() => {}} />;
});
