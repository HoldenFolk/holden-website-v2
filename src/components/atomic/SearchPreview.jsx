// Author: Torin Andrews
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { keyframes } from 'styled-components';
import { ClubLogo } from './ClubLogo';

const SearchPreview = ({ result }) => {
  const navigate = useNavigate();
  const { name } = result;
  const { description } = result;
  const { logo } = result;

  //console.log('Current Object', currentObject);
  const defaultUrl =
    'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';

  return (
    <Container onClick={() => navigate(`/club/${name}`)}>
      <StyledLogo src={logo === 'logo' ? defaultUrl : logo} />
      <TextContainer>
        <Title> {name} </Title>
        <Description> {description} </Description>
      </TextContainer>
    </Container>
  );
};

const TextContainer = styled.div`
  flex-direction: column;
`;

const Description = styled.div`
  font-size: medium;
  font-weight: light;
  opacity: 70%;
`;
const Title = styled.div`
  font-size: large;
  font-weight: bold;
`;

const StyledLogo = styled(ClubLogo)`
  height: 60px;
  width: 60px;
  margin-right: 1rem;
`;

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

const Container = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: left;
  align-items: left;
  flex-direction: row;
  font-family: ${({ theme }) => theme.fonts.primary};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
  transition:
    transform 1s ease,
    box-shadow 1s ease;

  &:hover {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
    transform: scale(1.03);
  }
`;

export default SearchPreview;
