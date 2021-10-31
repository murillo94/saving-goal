import { Card, Text, Button } from 'components';

import { useHome } from 'containers';

import { styled } from 'theme';

import type { NextPage } from 'next';

const Main = styled('main', {
  width: '1136px',
  margin: '0 auto',
  py: '$8',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  '@small': {
    width: '100%',
  },
});

const List = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  '@small': {
    flexDirection: 'column',
    flexWrap: 'initial',
  },
});

const Home: NextPage = () => {
  const { goals } = useHome();

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
      <List>
        {goals.map(({ name, title }) => (
          <Card
            key={title}
            appearance="border"
            css={{
              display: 'flex',
              flexDirection: 'column',
              mr: '$3',
              mb: '$3',
              p: '$3',
            }}
          >
            <Text
              appearance="gray900"
              weight="semiBold"
              align="center"
              css={{ mb: '$2' }}
            >
              {title}
            </Text>
            {/* <Icon name={name} label="Icon" /> */}
            <Button as="a" href="/edit" css={{ textAlign: 'center' }}>
              Setup goal
            </Button>
          </Card>
        ))}
      </List>
    </Main>
  );
};

export default Home;
