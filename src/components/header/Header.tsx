import Image from 'next/image';
import { styled } from 'theme';

const HeaderStyled = styled('header', {
  backgroundColor: '$neutralWhite',
  py: '$4',
  px: '$10',
});

export const Header = () => (
  <HeaderStyled>
    <Image
      src="/logo.png"
      alt="Origin logo"
      width={100}
      height={32}
      loading="lazy"
    />
  </HeaderStyled>
);
