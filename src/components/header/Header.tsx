import { styled } from 'theme';

const HeaderStyled = styled('header', {
  backgroundColor: '$neutralWhite',
  py: '$4',
  px: '$11',
  '@small': {
    px: '$3',
  },
});

const Image = styled('img', {
  width: '100px',
  height: '32px',
  '@small': {
    width: '75px',
    height: '24px',
  },
});

export const Header = () => (
  <HeaderStyled>
    <Image src="/logo.png" alt="Origin logo" />
  </HeaderStyled>
);
