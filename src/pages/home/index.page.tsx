import { Text } from 'components';

import { styled } from 'theme';

import type { NextPage } from 'next';

const Main = styled('main', {
  width: '1136px',
  margin: '0 auto',
  py: '$8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const Home: NextPage = () => {
  return (
    <Main>
      <Text
        as="h1"
        appearance="gray900"
        size="xxlarge"
        weight="normal"
        css={{ pb: '$4' }}
      >
        Here are your savings goals!
      </Text>
    </Main>
  );
};

export default Home;
