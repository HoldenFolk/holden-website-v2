import React from 'react';
import styled from 'styled-components';
import { Header, SubHeader } from '../../atomic/Headers.style';
import ProjectCard from '../../molecule/ProjectCard';
import useGithubProjects from '../../../hooks/useGithubProjects';

const ProjectsSection = () => {
  const { projects, loading, error } = useGithubProjects();

  return (
    <Container>
      <TitleContainer>
        <Header>Projects</Header>
        <SubHeader>My GitHub Work</SubHeader>
      </TitleContainer>
      {loading && <StatusText>Loading projects...</StatusText>}
      {error && (
        <StatusText>Could not load projects. Check back soon.</StatusText>
      )}
      {!loading && !error && (
        <BlocksContainer>
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              language={project.language}
              stars={project.stars}
              url={project.url}
            />
          ))}
        </BlocksContainer>
      )}
    </Container>
  );
};

export default ProjectsSection;

const Container = styled.div`
  width: 100%;
  margin-top: 7rem;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: start;
  width: 100%;
`;

const StatusText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  opacity: 0.7;
`;
