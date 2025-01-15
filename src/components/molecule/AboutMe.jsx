import React from 'react';
import styled, { keyframes } from 'styled-components';
import headshot from '../../assets/ProfessionalShotSharp.jpg';
import codeScreenshot from '../../assets/CodeScreenshot.jpg';
import { Header, SubHeader } from '../atomic/Headers.style';

// TODO: Add github link
const AboutMe = () => (
  <PageContainer>
    <TitleCenterContainer>
      <TitleContainer>
        <Header>About Me</Header>
        <SubHeader>A bit about Holden</SubHeader>
      </TitleContainer>
    </TitleCenterContainer>

    <SectionContainer>
      <Section>
        <SectionImage src={headshot} alt="Who am I?" />
        <SectionText>
          <h3>Who am I?</h3>
          <p>
            Hello! My name is Holden. I am a fourth year computer science
            student at McGill University. My interests include software design
            and development, web design, database systems, and brain-inspired
            AI. I have currently completed internships in web development,
            mobile app development, finance, and am always looking for further
            opportunities to learn and collaborate in interesting environments.
            Check out my resume and LinkedIn to learn more about my experience.
          </p>
        </SectionText>
      </Section>

      <Section reverse>
        <SectionImage
          src="https://reporter.mcgill.ca/wp-content/uploads/2022/10/McGill-Arts-fall-colours-scaled.jpg"
          alt="Why do I enjoy computer science?"
        />
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
        <SectionImage src={codeScreenshot} alt="What is this website?" />
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
  </PageContainer>
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

// Styled components
const PageContainer = styled.div`
  padding: 7rem;
`;

const TitleCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  width: 60%;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'reverse',
})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  animation: ${fadeIn} 1s ease-out;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionImage = styled.img`
  flex: 1;
  max-width: 400px;
  min-width: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 1s ease,
    box-shadow 1s ease;
`;

const SectionText = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export default AboutMe;
