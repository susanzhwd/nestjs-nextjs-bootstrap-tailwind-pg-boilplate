import { IndexProps } from '@interfaces/index';
import Link from 'next/link';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Layout from '../components/Layout';

const IndexPage = (props: IndexProps) => {
  console.log(props);
  async function authenticate(access_token) {
    const authResponse = await fetch(
      `http://localhost:3000/api/auth/facebook?access_token=${access_token}`,
    );
  }
  const responseFacebook = async (response) => {
    authenticate(response.accessToken);
  };
  return (
    <Layout title="Home | Web Price Watcher">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About sdfds</a>
        </Link>
      </p>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button>
      <FacebookLogin
        appId="1010700779321003"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      {/* <SocialButton
        className="btn btn-danger"
        provider="google"
        appId="404218952114-qilc92qgkpdgke2rg3hcs4jmtlpjg5ac.apps.googleusercontent.com"
        onLoginSuccess={() => {}}
        onLoginFailure={() => {}}
      ></SocialButton> */}
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  // const connection = await getDBConnection();
  // if (context.req) {
  //   return { props: (context.query as unknown) as IndexProps };
  // }
  // return {
  //   props: { message: 'from client' + new Date().toTimeString() },
  //   revalidate: 10,
  // };
  return {
    props: { message: 'from client' + new Date().toTimeString() },
    revalidate: 10,
  };
};

export default IndexPage;
