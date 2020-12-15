import React from 'react';
import Layout from 'src/components/Layout';
import SignInUp from 'src/components/user/signInUp';

const SignInPage = () => {
  // const router = useRouter();
  // router.query.pathname = '/signIn';
  return (
    <Layout title="Sign In | Web Price Watcher">
      <SignInUp />
    </Layout>
  );
};

export default SignInPage;
