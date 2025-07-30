import React from 'react';
import styled from 'styled-components';

interface Input3DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = styled.input`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    transform: perspective(1000px) translateZ(15px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const Input3D = (props: Input3DProps) => {
  return <Input {...props} />;
};