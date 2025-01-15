import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import LandingTitle from '../../molecule/LandingTitle';
import LandingPageHeader from '../../molecule/LandingPageHeader';
import { BackgroundContainer } from '../../molecule/BackgroundContainer.style';
import Button from '../../atomic/Button';
import CV from '../../../assets/resumeHoldenFolk-1.pdf';
import Socials from '../../molecule/Socials';
import AboutMe from '../../molecule/AboutMe';

// Ladning Page Screen Component
// TODO: Encapsulate the landing page logic
export const LandingPage = () => {
  // Download resume on click
  const onButtonClick = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'resumeHoldenFolk-1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTemplate>
      <BackgroundContainer>
        <LandingPageHeader />
        <CenterContainer>
          <LandingTitle />
          <ButtonContainer>
            <Button
              text="Download Resume"
              variant="fill"
              onClick={onButtonClick}
            />
            <Button
              text="Contact Me"
              variant="outline"
              onClick={onButtonClick}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Socials />
          </ButtonContainer>
        </CenterContainer>
        <AboutMe />
      </BackgroundContainer>
    </PageTemplate>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  margin-bottom: 2rem;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  min-height: 100vh;
`;
