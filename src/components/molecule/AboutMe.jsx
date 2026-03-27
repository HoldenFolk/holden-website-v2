import React from 'react';
import styled, { keyframes } from 'styled-components';
import headshot from '../../assets/ProfessionalShotSharp.jpeg';
import codeScreenshot from '../../assets/CodeScreenshot.jpg';
import { Header, SubHeader } from '../atomic/Headers.style';

// TODO: Add github link
const AboutMe = () => (
  <>
    <TitleCenterContainer>
      <TitleContainer>
        <Header>About Me</Header>
        <SubHeader>A bit about Holden</SubHeader>
      </TitleContainer>
    </TitleCenterContainer>
    <SectionContainer>
      <Section>
        <ImageWrapper>
          <SectionImage src={headshot} alt="Who am I?" />
        </ImageWrapper>
        <SectionText>
          <h3>Who am I?</h3>
          <p>
            Hello! My name is Holden. I am a Data &amp; AI Engineer based in
            Toronto, ON, with a Computer Science degree from McGill University.
            My interests include data engineering, system design, scalable
            pipeline architecture, and applied AI. I am also a strong advocate
            for data privacy and believe it should be a core consideration in
            how we build modern systems. I am currently working at Sagard and am
            always looking for opportunities to collaborate on interesting
            problems. Check out my resume and LinkedIn to learn more about my
            experience.
          </p>
        </SectionText>
      </Section>

      <Section reverse>
        <ImageWrapper>
          <SectionImage
            src="https://reporter.mcgill.ca/wp-content/uploads/2022/10/McGill-Arts-fall-colours-scaled.jpg"
            alt="Why do I enjoy computer science?"
          />
        </ImageWrapper>
        <SectionText>
          <h3>Why do I enjoy computer science?</h3>
          <p>
            I have always been a big thinker, looking to find answers to the
            great questions of our universe and existence. I quickly learned
            that the most realistic way to do this is through computer science!
            It is the most rewarding feeling in the world to learn something,
            create a product from it, and then get to see others utilize that
            product in real life. I can&apos;t wait to learn as much as I can in
            this field and continue expanding my skillset in a work environment.
          </p>
        </SectionText>
      </Section>

      <Section>
        <ImageWrapper>
          <SectionImage src={codeScreenshot} alt="What is this website?" />
        </ImageWrapper>
        <SectionText>
          <h3>What is this website?</h3>
          <p>
            This website is a portfolio to show who I am, my experience, and
            what I am interested in. The website was created with React.js, and
            utilizes professional design concepts and techniques I have learned
            in my years of full-stack web development experience. Check out the
            project on GitHub to see the source code!
          </p>
        </SectionText>
      </Section>
    </SectionContainer>
  </>
);

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TitleCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 7rem;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Section = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'reverse',
})`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.fourth};
  border-radius: 16px;
  border-left: 4px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 1s ease-out;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  ${({ reverse, theme }) =>
    reverse &&
    `
    border-left: none;
    border-right: 4px solid ${theme.colors.secondary};
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    border-left: 4px solid;
    border-right: none;
    padding: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 330px;
  height: 330px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 0 0 3px ${({ theme }) => theme.colors.secondary},
    0 8px 24px rgba(0, 0, 0, 0.4);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow:
      0 0 0 3px ${({ theme }) => theme.colors.secondary},
      0 12px 32px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
`;

const SectionText = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 0 1rem;
    letter-spacing: 0.02em;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.95rem;
    line-height: 1.75;
    opacity: 0.85;
    margin: 0;
  }
`;

export default AboutMe;
