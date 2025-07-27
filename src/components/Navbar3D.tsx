import React from 'react';
import styled from 'styled-components';

interface Navbar3DProps {
  children: React.ReactNode;
  className?: string;
}

const Nav = styled.nav`
  background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
  border: 2px solid #d4d4c4;
  border-radius: 6px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #333;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #666;
    }
  }
`;

export const Navbar3D = ({ children, className }: Navbar3DProps) => {
  return <Nav className={className}>{children}</Nav>;
};