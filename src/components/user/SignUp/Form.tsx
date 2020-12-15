import React from 'react';
import { useForm } from 'react-hook-form';
import SocialButtons from '../SocialButtons';
import { StyledFormWrapper } from '../styled2';
// import "../auth-form.scss";

export default function SignUpForm({ onSignIn }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <StyledFormWrapper>
      <form>
        <p className="hint-text">
          Sign up with your social media account or email address
        </p>
        <p className="text-center signInUp-text">
          Already have an account?{' '}
          <a href="#" onClick={onSignIn}>
            Sign In here
          </a>
        </p>
        <SocialButtons />
        <div className="or-seperator">
          <b>or</b>
        </div>
        <div className="form-row ">
          <div className="col form-group">
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="First name"
            />
          </div>
          <div className="col form-group">
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            name="confirm_password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success btn-lg btn-block auth-btn"
          >
            Sign Up
          </button>
        </div>
        <div className="agree">
          By clicking "Sign Up", "Facebook", "Google" or "Twitter" you agree to
          the Wish Terms of Use and Privacy Policy
        </div>
      </form>
    </StyledFormWrapper>
  );
}
