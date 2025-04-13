import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import LandingTitle from '../../molecule/LandingTitle';
import Button from '../../atomic/Button';
import CV from '../../../../public/ResumeHoldenFolk1.pdf';
import Socials from '../../molecule/Socials';

// Landing Page Screen Component
const HomeSection = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Download resume on click
  const onButtonClick = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'ResumeHoldenFolk1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CenterContainer>
      <LandingTitle />
      <ButtonContainer>
        <Button text="Download Resume" variant="fill" onClick={onButtonClick} />
        <Button text="Contact Me" variant="outline" onClick={onContactClick} />
      </ButtonContainer>
      <ButtonContainer>
        <Socials />
      </ButtonContainer>
      {isAtTop && (
        <ArrowContainer>
          <AnimatedArrow>&#x2193;</AnimatedArrow>
          <ArrowText>Scroll Down</ArrowText>
        </ArrowContainer>
      )}
    </CenterContainer>
  );
};

export default HomeSection;

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
  height: 100vh;
  position: relative;
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 60%;
`;

const ArrowText = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0.5rem;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const AnimatedArrow = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  animation: ${bounce} 2s infinite;
`;
