import React from 'react';
import HorizontalHeader from '../atomic/HorizontalHeader';
import ClickableText from '../atomic/ClickableText';

const LandingPageHeader = ({ variant = 'light' }) => {
  return (
    <HorizontalHeader>
      <ClickableText text="Home" variant={variant} href={'#home'} />
      <ClickableText text="Experience" variant={variant} href={'#about'} />
      <ClickableText text="Projects" variant={variant} href={'#projects'} />
      <ClickableText text="Contact" variant={variant} href={'#contact'} />
    </HorizontalHeader>
  );
};

export default LandingPageHeader;
