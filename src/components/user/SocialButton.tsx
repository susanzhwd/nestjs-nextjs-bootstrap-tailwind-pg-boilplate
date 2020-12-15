import React from 'react';
import SocialLogin from 'react-social-login';

// class ButtonFC extends React.Component<{
//   children;
//   triggerLogin;
//   triggerLogout;
// }> {
//   render() {
//     return (
//       <button onClick={this.props.triggerLogout} {...this.props}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

const ButtonFC = ({ children, triggerLogin, ...props }) => {
  return (
    <button onClick={triggerLogin} {...props}>
      {children}
    </button>
  );
};

// export default SocialLogin(ButtonFC)
export default SocialLogin(ButtonFC);
