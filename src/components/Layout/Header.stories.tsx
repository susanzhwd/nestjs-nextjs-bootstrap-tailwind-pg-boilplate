import { storiesOf } from '@storybook/react';
import React from 'react';
import MockRouter from '../../../.storybook/mockRouter';
import Header from './Header';

// export default { title: 'Header' };

// export const withSignInUp = () => <Header></Header>;

storiesOf('Header', module)
  .add('withSignInUp', () => {
    return (
      <MockRouter>
        <Header></Header>
      </MockRouter>
    );
  })
  .add('withSignIn', () => {
    return (
      <MockRouter router={{ pathname: '/signIn' }}>
        <Header></Header>
      </MockRouter>
    );
  })
  .add('withSignUp', () => {
    return (
      <MockRouter router={{ pathname: '/signUp' }}>
        <Header></Header>
      </MockRouter>
    );
  });
