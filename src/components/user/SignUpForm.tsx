import React from 'react';
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

export default function SignUpForm({ onSignIn }) {
  // const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  // console.log(watch('example')); // watch StyledFormInput value by passing the name of it

  return (
    <StyledFormWrapper>
      <StyledForm>
        <StyledHintText1>
          Sign up with your social media account or email address
        </StyledHintText1>
        <StyledHintText2>
          Already have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSignIn();
            }}
          >
            Sign In here
          </a>
        </StyledHintText2>
        <SocialButtons />
        <StyledOrSeperator>
          <b>or</b>
        </StyledOrSeperator>
        <StyledFormGrid>
          <div className="col-span-6 sm:col-span-3">
            <StyledFormInput
              type="text"
              name="firstName"
              placeholder="First name"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <StyledFormInput
              type="text"
              name="lastName"
              placeholder="Last name"
            />
          </div>
          <StyledFormRow>
            <StyledFormInput
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </StyledFormRow>
          <StyledFormRow>
            <StyledFormInput
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </StyledFormRow>
          <StyledFormRow>
            <StyledFormInput
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required
            />
          </StyledFormRow>
          <StyledFormRow>
            <StyledFormButton type="submit">Sign Up</StyledFormButton>
          </StyledFormRow>
        </StyledFormGrid>
        <StyledFormAgree>
          By clicking "Sign Up", "Facebook", "Google" or "Twitter" you agree to
          the Wish Terms of Use and Privacy Policy
        </StyledFormAgree>
      </StyledForm>
    </StyledFormWrapper>
  );
}
