import React from 'react';
import Layout from 'src/components/Layout';
import SignInUp from 'src/components/user/signInUp';

const SignUpPage = () => {
  // const router = useRouter();
  // router.query.pathname = '/signUp';
  return (
    <Layout title="Sign Up | Web Price Watcher">
      <SignInUp />
    </Layout>
  );
};

export default SignUpPage;
