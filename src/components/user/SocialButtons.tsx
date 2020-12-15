import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { login } from '../../api/auth';
import { StyledSocialButton, StyledSocialButtonGroup } from './styled';

const StyledSocialButtons = () => {
  const onLoginSuccess = async (user) => {
    // console.log(user);
    // const response = await fetch(
    //   `http://localhost:3000/api/auth/${user.provider}?access_token=${user.token.accessToken}`,
    // );
    // response.json().then((data) => {
    //   console.log(data);
    // });
    login(user.provider, user.token.accessToken).then((result) => {
      console.log(result.data);
    });
  };

  const onLoginFailure = (err) => {
    console.error(err);
  };

  return (
    <StyledSocialButtonGroup className="text-center">
      <StyledSocialButton
        provider="facebook"
        className="bg-blue-600 hover:bg-blue-700"
        appId="1010700779321003"
        onLoginSuccess={onLoginSuccess}
        onLoginFailure={onLoginFailure}
      >
        <FontAwesomeIcon icon={faFacebookF} size="lg" />
        &nbsp; Facebook
      </StyledSocialButton>
      <StyledSocialButton
        className="bg-red-600 hover:bg-red-700"
        provider="google"
        appId="404218952114-qilc92qgkpdgke2rg3hcs4jmtlpjg5ac.apps.googleusercontent.com"
        onLoginSuccess={onLoginSuccess}
        onLoginFailure={onLoginFailure}
      >
        <FontAwesomeIcon icon={faGoogle} size="lg" />
        &nbsp;Google
      </StyledSocialButton>
      {/* <TwitterLogin
        consumerKey="ykUWjETob6X6BqR9b8tmduVJZ"
        consumerSecret="LRrsSgdTa99iqPaUtCrdKfUK7HMvULtDBsufWA5WAprzSloL9D"
        authCallback={() => {}}
        children={
          <button className="btn btn-info">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            &nbsp;Twitter
          </button>
        }
      /> */}
    </StyledSocialButtonGroup>
  );
};

export default StyledSocialButtons;
