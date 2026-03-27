import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ name, description, language, stars, url }) => {
  return (
    <CardLink href={url} target="_blank" rel="noopener noreferrer">
      <StyledCard>
        <TopSection>
          <ProjectName>{name}</ProjectName>
          {language && <LanguageBadge>{language}</LanguageBadge>}
        </TopSection>
        <Description>{description || 'No description provided.'}</Description>
        <Footer>
          <StarCount>&#9733; {stars}</StarCount>
        </Footer>
      </StyledCard>
    </CardLink>
  );
};

export default ProjectCard;

const CardLink = styled.a`
  text-decoration: none;
  display: block;
  width: 100%;
`;

const StyledCard = styled.div`
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.secondary},
    #d98a00
  );
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 1.75rem;
  width: 100%;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 0.75rem;
`;

const ProjectName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

const LanguageBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  background-color: rgba(0, 0, 0, 0.15);
  padding: 2px 8px;
  border-radius: 20px;
  white-space: nowrap;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  opacity: 0.85;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
`;

const StarCount = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.7;
`;
