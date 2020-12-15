import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import tw, { styled } from 'twin.macro';

const LoginForm = dynamic(() => import('./LoginForm'), {
  ssr: false,
});

const SignUpForm = dynamic(() => import('./SignUpForm'), {
  ssr: false,
});

const SignInUp = () => {
  const router = useRouter();
  const FormWrapper = styled.div(() => tw`max-w-md pt-5 mx-auto`);
  async function authenticate(access_token) {
    const authResponse = await fetch(
      `http://localhost:3000/api/auth/facebook?access_token=${access_token}`,
    );
  }

  const responseFacebook = async (response) => {
    authenticate(response.accessToken);
  };

  return (
    <FormWrapper>
      {router.pathname === '/signIn' ? (
        <LoginForm
          onSignUp={() => {
            router.push('/signUp');
          }}
        ></LoginForm>
      ) : router.pathname === '/signUp' ? (
        <SignUpForm
          onSignIn={() => {
            router.push('/signIn');
          }}
        ></SignUpForm>
      ) : null}
    </FormWrapper>
  );
};

export default SignInUp;
