import React from 'react';
import ContactForm from '../../molecule/ContactForm';
import styled from 'styled-components';
import { Header, SubHeader } from '../../atomic/Headers.style';

const ContactSection = () => {
  return (
    <>
      <HeaderContainer>
        <Header>Contact Me </Header>
        <SubHeader>I want to hear from you.</SubHeader>
      </HeaderContainer>
      <FormDiv>
        <ContactForm></ContactForm>
      </FormDiv>
    </>
  );
};

export default ContactSection;

const HeaderContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 100px;
`;
