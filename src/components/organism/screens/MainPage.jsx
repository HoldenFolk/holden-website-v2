import React from 'react';
import { PageTemplate } from '../../template/index';
import LandingPageHeader from '../../molecule/LandingPageHeader';
import { BackgroundContainer } from '../../molecule/BackgroundContainer.style';
import AboutMe from '../../molecule/AboutMe';
import HomeSection from './HomeSection';
import ContactSection from './ContactSection';
import ExperienceSection from './ExperienceSection';
import styled from 'styled-components';

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

const ExperienceLink = () => (
  <div id="experience">
    <ExperienceSection />
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
        <SectionsContainer>
          <LandingPageHeader />
          <HomeLink />
          <AboutLink />
          <ExperienceLink />
          <ContactLink />
        </SectionsContainer>
      </BackgroundContainer>
    </PageTemplate>
  );
};

export default MainPage;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 7rem;
  padding-left: 9rem;
  padding-right: 9rem;
`;
