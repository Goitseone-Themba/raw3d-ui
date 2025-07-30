import React from 'react';
import styled from 'styled-components';

interface ProgressBar3DProps {
  value: number;
  className?: string;
}

const ProgressBarContainer = styled.div`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 2px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.main};

  &:hover {
    transform: perspective(1000px) translateZ(15px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const Progress = styled.div<{ value: number }>`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, #feca57);
  height: 20px;
  border-radius: 4px;
  transition: width 0.3s ease;
  width: ${({ value }) => value}%;
`;

export const ProgressBar3D = ({ value, className }: ProgressBar3DProps) => {
  return (
    <ProgressBarContainer className={className}>
      <Progress value={value} />
    </ProgressBarContainer>
  );
};