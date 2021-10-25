import { Text } from 'components';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Text as="h1" size="large" align="center" css={{ pb: '$4' }}>
      Hello word
    </Text>
  );
};

export default Home;
