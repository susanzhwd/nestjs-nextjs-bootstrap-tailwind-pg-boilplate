import React from 'react';
import { useForm } from 'react-hook-form';
import SocialButtons from '../SocialButtons';
import { StyledFormWrapper } from '../styled';

export default function LoginForm({ onSignUp }) {
  const { register, handleSubmit } = useForm();
  // const dispatch = useDispatch();
  const onSubmit = () => {
    // dispatch(AuthActionCreators.LOGIN(data));
  };

  //console.log(watch("email")); // watch input value by passing the name of it

  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="hint-text">
          Sign in with your social media account or email address
        </p>
        <p className="text-center signInUp-text">
          Do not have an account?{' '}
          <a href="#" onClick={onSignUp}>
            Sign up here
          </a>
        </p>
        <SocialButtons />
        <div className="or-seperator">
          <b>or</b>
        </div>
        <div className="form-group">
          <input
            autoComplete="username"
            type="email"
            className="form-control form-control-lg"
            name="email"
            placeholder="Email Address"
            ref={register}
          />
        </div>
        <div className="form-group">
          <input
            autoComplete="current-password"
            type="password"
            className="form-control form-control-lg"
            name="password"
            placeholder="Password"
            ref={register}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success btn-lg btn-block auth-btn"
          >
            Log In
          </button>
        </div>
        <div className="agree">
          By clicking "Login", "Facebook", "Google" or "Twitter" you agree to
          the Wish Terms of Use and Privacy Policy
        </div>
      </form>
    </StyledFormWrapper>
  );
}
