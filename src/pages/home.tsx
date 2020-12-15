import React from 'react';
import Layout from '../components/Layout';
import { Logo } from '../components/tw';
import userContainer from '../containers/user';

const About = ({ user }) => {
  // const userC = userContainer.useContainer();
  // console.log(2222222222222, userC.user);
  return (
    <userContainer.Provider initialState={user}>
      <Layout title="Home | Web Price Watcher">
        <div
        // css={[
        //   tw`flex flex-col items-center justify-center h-screen`,
        //   tw`bg-gradient-to-b from-electric to-ribbon`,
        // ]}
        >
          {/* <div tw="flex flex-col justify-center h-full space-y-5">
      <Button type="Primary">Send</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div> */}
          <Logo />
        </div>
      </Layout>
    </userContainer.Provider>
  );
};

export const getServerSideProps = async (context) => {
  // const connection = await getDBConnection();
  // if (context.req) {
  //   return { props: (context.query as unknown) as IndexProps };
  // }
  // return {
  //   props: { message: 'from client' + new Date().toTimeString() },
  //   revalidate: 10,
  // };

  return {
    props: { user: context.req.user },
  };
};

export default About;
