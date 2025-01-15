import React from 'react';
import { PageTemplate } from '../../template/index';
import LandingPageHeader from '../../molecule/LandingPageHeader';
import { BackgroundContainer } from '../../molecule/BackgroundContainer.style';
import AboutMe from '../../molecule/AboutMe';
import HomeSection from './HomeSection';
import ContactSection from './ContactSection';

const HomeLink = () => (
  <div id="home">
    <HomeSection />
  </div>
);

const AboutLink = () => (
  <div id="about">
    <AboutMe />
  </div>
);

const ContactLink = () => (
  <div id="contact">
    <ContactSection />
  </div>
);

// Ladning Page Screen Component
const MainPage = () => {
  return (
    <PageTemplate>
      <BackgroundContainer>
        <LandingPageHeader />
        <HomeLink />
        <AboutLink />
        <ContactLink />
      </BackgroundContainer>
    </PageTemplate>
  );
};

export default MainPage;
