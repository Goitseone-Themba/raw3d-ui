import React from 'react';
import styled from 'styled-components';

interface Navbar3DProps {
  children: React.ReactNode;
  className?: string;
}

const Nav = styled.nav`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 10px 20px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.main};
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const Navbar3D = ({ children, className }: Navbar3DProps) => {
  return <Nav className={className}>{children}</Nav>;
};