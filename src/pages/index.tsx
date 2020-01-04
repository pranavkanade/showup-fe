import { NextPage } from 'next';

import HomePlugin from '../ui/plugins/home';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => <HomePlugin />;

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
