import React from 'react';
import styled from 'styled-components';
import DateDisplay from '../atomic/DateDisplay';

const ExperienceBlock = ({ title, workplace, date, bullets }) => {
  return (
    <StyledBlock>
      <TopSection>
        <BottomBorderWrapper>
          <BlockHeader>{title}</BlockHeader>
          <SubHeader>{workplace}</SubHeader>
          <DateDisplay date={date} />
        </BottomBorderWrapper>
      </TopSection>
      <BottomSection>
        <BulletList>
          {bullets.map((bullet, index) => (
            <BulletItem key={index}>{bullet}</BulletItem>
          ))}
        </BulletList>
      </BottomSection>
    </StyledBlock>
  );
};

export default ExperienceBlock;

const StyledBlock = styled.div`
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.secondary},
    #d98a00
  );
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
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
  width: 100%;
  padding: 1.75rem 1.75rem 1.25rem;
`;

const BottomBorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  padding-bottom: 1rem;
`;

const BlockHeader = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.02em;
`;

const SubHeader = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.7;
`;

const BottomSection = styled.div`
  width: 100%;
  padding: 1rem 1.75rem 1.75rem;
`;

const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const BulletItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.92rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.black};
  padding-left: 1.1rem;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    font-size: 0.75rem;
    top: 0.2rem;
  }

  & + & {
    margin-top: 0.5rem;
  }
`;
