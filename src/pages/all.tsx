import { NextPage } from 'next';

const All: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>All List</h1>
);

All.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default All;
