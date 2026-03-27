import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import LandingTitle from '../../molecule/LandingTitle';
import Button from '../../atomic/Button';
import Socials from '../../molecule/Socials';
import { fetchResumeUrl } from '../../../api';

const HomeSection = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onButtonClick = () => {
    setPassword('');
    setPasswordError('');
    setModalOpen(true);
  };

  const onModalClose = () => {
    setModalOpen(false);
    setPassword('');
    setPasswordError('');
  };

  const onPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setPasswordError('Please enter the password.');
      return;
    }
    setDownloading(true);
    setPasswordError('');
    try {
      const url = await fetchResumeUrl(password);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ResumeHoldenFolk1.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onModalClose();
    } catch (err) {
      const status = err?.response?.status;
      if (status === 401) {
        setPasswordError('Incorrect password. Please try again.');
      } else {
        setPasswordError('Something went wrong. Please try again later.');
      }
    } finally {
      setDownloading(false);
    }
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

      {modalOpen && (
        <ModalOverlay onClick={onModalClose}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Enter Password to Download</ModalTitle>
            <form onSubmit={onPasswordSubmit}>
              <PasswordInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              {passwordError && <ModalError>{passwordError}</ModalError>}
              <ModalButtons>
                <Button
                  type="submit"
                  variant="fill"
                  text={downloading ? 'Downloading...' : 'Download'}
                  disabled={downloading}
                />
                <Button
                  type="button"
                  variant="outline"
                  text="Cancel"
                  onClick={onModalClose}
                  disabled={downloading}
                />
              </ModalButtons>
            </form>
          </ModalCard>
        </ModalOverlay>
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

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  background: ${({ theme }) => theme.colors.fourth};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
`;

const ModalTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  margin: 0 0 1.25rem;
  text-align: center;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  outline: none;
  margin-bottom: 0.75rem;

  &:focus {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }
`;

const ModalError = styled.p`
  color: #ff6b6b;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.85rem;
  margin: 0 0 0.75rem;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`;
