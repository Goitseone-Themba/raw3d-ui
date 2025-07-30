import React from 'react';
import styled from 'styled-components';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.dark};
  transform: perspective(1000px) rotateX(10deg) rotateY(5deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};

  &:hover {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent);
    z-index: 0;
  }
`;

export const Card3D = ({ children, className, onClick }: Card3DProps) => {
  return (
    <CardContainer className={className} onClick={onClick}>
      {children}
    </CardContainer>
  );
};