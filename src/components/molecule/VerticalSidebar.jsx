// Author: Holden Folk
import React from 'react';
import styled from 'styled-components';
import Logo from '../atomic/Logo';
import Icon from '../atomic/Icon';
import { faSearch, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

// Dynamic vertical sidebat that turns into a horizontal sidebar on smaller screens
const VerticalSidebar = () => {
  const navigate = useNavigate();

  return (
    <VerticalDiv>
      <Logo variant="black" height={130} />
      <Icon
        icon={faSearch}
        alt="Search Icon"
        text="Search"
        onClick={() => navigate('/search')}
      />
      <Icon
        icon={faUser}
        alt="Profile Icon"
        text="Profile"
        onClick={() => navigate('/profile')}
      />
      <Icon
        icon={faHome}
        alt="Post Icon"
        text="Dashboard"
        onClick={() => navigate('/dashboard')}
      />
    </VerticalDiv>
  );
};

export default VerticalSidebar;

const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  min-height: 100vh;
  row-gap: 1.5rem;
  min-width: 200px;
  padding: 1rem;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    min-height: auto;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1rem;
  }
`;
