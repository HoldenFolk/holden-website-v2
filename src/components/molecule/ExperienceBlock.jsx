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
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
  border: 3px solid;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  width: 100%;
  padding: 2rem;
  row-gap: 1rem;
`;

const BottomBorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 0.5rem;
  border-bottom: 1px solid;
  align-items: flex-start;
  padding-bottom: 1rem;
`;

const BlockHeader = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: bold;
`;

const SubHeader = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
`;

const BottomSection = styled.div`
  width: 100%;
  padding: 1rem;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.5rem; /* Adds space for the bullet points */
  list-style-type: disc; /* Default bullet point style */
`;

const BulletItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  line-height: 1.5;
`;
