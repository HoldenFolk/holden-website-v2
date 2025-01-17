import React from 'react';
import styled from 'styled-components';
import { Header, SubHeader } from '../../atomic/Headers.style';
import ExperienceBlock from '../../molecule/ExperienceBlock';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Front End Intern',
      workplace: 'Kaidu AI',
      date: 'May 2024 - August 2024',
      bullets: [
        'Completed React.js client dashboard allowing users to view real time data from Kaidu Sensors',
        'Completed React Native Mobile application that enables users to connect to and configure Kaidu Blutooth low-energy devices to Wi-Fi',
        'Practices  skills with Typescript, Azure Services, APIs, and integrated CI/CD',
      ],
    },
    {
      title: 'Web Development Intern',
      workplace: 'Data Front',
      date: '2022 - 2023',
      bullets: [
        'Implemented a complete data analytics feature for the company’s fund reporting application including an AWS alarm system.',
        'Worked with React JS framework and developed a REST API to capture and store server-side analytic data created by application users',
        'Developed the features under direction of company CTO who reviewed all code in Gitlab source control',
      ],
    },
    {
      title: 'Investment Analyst Intern',
      workplace: 'Altas Partners',
      date: 'March 2021 - June 2021 ',
      bullets: [
        'Assisted with market research/source and conduct interviews with high-profile experts',
        'Completed a preliminary risk analysis of a leading healthcare provider in the United States for a principal at Altas',
      ],
    },
  ];

  return (
    <Container>
      <TitleContainer>
        <Header>Experience</Header>
        <SubHeader>My Jobs and Experience</SubHeader>
      </TitleContainer>
      <BlocksContainer>
        {experiences.map((experience, index) => (
          <ExperienceBlock
            key={index}
            title={experience.title}
            workplace={experience.workplace}
            date={experience.date}
            bullets={experience.bullets}
          />
        ))}
      </BlocksContainer>
    </Container>
  );
};

export default ExperienceSection;

const Container = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  text-align: center;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const BlocksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 2rem; /* Spacing between grid items */
  justify-items: center; /* Center the items horizontally */
  align-items: start; /* Align items at the start vertically */
  width: 100%;
`;
