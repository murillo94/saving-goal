import {
  Box,
  Icon,
  Input,
  Button,
  Label,
  Text,
  Month,
  Card,
  Inline,
} from 'components';

import { useHome } from 'containers';

import { styled } from 'theme';

import type { NextPage } from 'next';

const Main = styled('main', {
  width: '560px',
  margin: '0 auto',
  py: '$10',
  '@small': {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
  },
});

const Goal = styled(Box, {
  ml: '$4',
});

const Amount = styled(Box, {
  mr: '$3',
  '@small': {
    marginRight: 0,
    mb: '$3',
  },
});

const Disclaimer = styled(Box, {
  backgroundColor: '$blueGray10',
  py: '$4',
  px: '$6',
});

const Confirm = styled(Box, {
  textAlign: 'center',
});

const Home: NextPage = () => {
  const {
    initialMonth,
    goalDate,
    distanceDates,
    amount,
    formatAmount,
    formatMonthlyAmount,
    handleAmount,
    handleReachDate,
    handleSubmit,
  } = useHome();

  return (
    <Main>
      <Text as="h1" size="large" align="center" css={{ pb: '$4' }}>
        Let&apos;s plan your{' '}
        <Text as="span" size="large" weight="semiBold">
          saving goal.
        </Text>
      </Text>
      <Card
        appearance="shadow"
        css={{
          py: '$7',
          px: '$8',
          '@small': {
            px: '$4',
          },
        }}
      >
        <Inline responsive={false} css={{ mb: '$5' }}>
          <Icon name="house" label="blue house" />
          <Goal>
            <Text
              as="h2"
              appearance="gray900"
              size="xlarge"
              weight="normal"
              font="rubik"
              css={{ mb: '$1' }}
            >
              Buy a house
            </Text>
            <Text appearance="gray400">Saving goal</Text>
          </Goal>
        </Inline>
        <Inline spaceY="initial" css={{ mb: '$4' }}>
          <Amount>
            <Label htmlFor="amount">Total amount</Label>
            <Input
              id="amount"
              name="amount"
              ariaLabel="Type a total amount"
              value={amount}
              onValueChange={handleAmount}
            />
          </Amount>
          <Box>
            <Label htmlFor="reachDate">Reach goal by</Label>
            <Month initialValue={initialMonth} onChange={handleReachDate} />
          </Box>
        </Inline>
        <Card css={{ mb: '$6' }}>
          <Inline
            spaceX="between"
            responsive={false}
            css={{
              p: '$6',
              '@small': {
                py: '$6',
                px: '$4',
              },
            }}
          >
            <Text appearance="gray900" size="large" css={{ px: '$1' }}>
              Monthly amount
            </Text>
            <Text
              appearance="secondary"
              size="xxlarge"
              weight="semiBold"
              css={{ px: '$1' }}
            >
              {formatMonthlyAmount}
            </Text>
          </Inline>
          <Disclaimer>
            <Text
              appearance="gray900"
              size="xsmall"
              css={{
                '@small': {
                  textAlign: 'center',
                },
              }}
            >
              You’re planning{' '}
              <Text
                as="span"
                appearance="gray900"
                size="xsmall"
                weight="semiBold"
              >
                {distanceDates} monthly deposits
              </Text>{' '}
              to reach your{' '}
              <Text
                as="span"
                appearance="gray900"
                size="xsmall"
                weight="semiBold"
              >
                {formatAmount}{' '}
              </Text>{' '}
              goal by{' '}
              <Text
                as="span"
                appearance="gray900"
                size="xsmall"
                weight="semiBold"
              >
                {goalDate}
              </Text>
            </Text>
          </Disclaimer>
        </Card>
        <Confirm>
          <Button onClick={handleSubmit}>Confirm</Button>
        </Confirm>
      </Card>
    </Main>
  );
};

export default Home;
