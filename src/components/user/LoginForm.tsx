import React from 'react';
import { useForm } from 'react-hook-form';
import SocialButtons from './SocialButtons';
import {
  StyledForm,
  StyledFormAgree,
  StyledFormButton,
  StyledFormGrid,
  StyledFormInput,
  StyledFormRow,
  StyledFormWrapper,
  StyledHintText1,
  StyledHintText2,
  StyledOrSeperator,
} from './styled';

export default function LoginForm({ onSignUp }) {
  const { register, handleSubmit } = useForm();
  // const dispatch = useDispatch();
  const onSubmit = () => {
    // dispatch(AuthActionCreators.LOGIN(data));
  };

  //console.log(watch("email")); // watch input value by passing the name of it

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledHintText1>
          Sign in with your social media account or email address
        </StyledHintText1>
        <StyledHintText2>
          Do not have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSignUp();
            }}
          >
            Sign up here
          </a>
        </StyledHintText2>
        <SocialButtons />
        <StyledOrSeperator>
          <b>or</b>
        </StyledOrSeperator>
        <StyledFormGrid>
          <StyledFormRow>
            <StyledFormInput
              autoComplete="username"
              type="email"
              name="email"
              placeholder="Email Address"
              ref={register}
            />
          </StyledFormRow>
          <StyledFormRow>
            <StyledFormInput
              autoComplete="current-password"
              type="password"
              name="password"
              placeholder="Password"
              ref={register}
            />
          </StyledFormRow>
          <StyledFormRow>
            <StyledFormButton type="submit">Log In</StyledFormButton>
          </StyledFormRow>
        </StyledFormGrid>

        <StyledFormAgree>
          By clicking "Login", "Facebook", "Google" or "Twitter" you agree to
          the Wish Terms of Use and Privacy Policy
        </StyledFormAgree>
      </StyledForm>
    </StyledFormWrapper>
  );
}
