import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Dropdown3DProps {
  children: React.ReactNode;
  className?: string;
  label: string;
}

const DropdownContainer = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.main};
`;

const DropdownToggle = styled.button`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 10px 20px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: perspective(1000px) translateZ(15px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows.dark};
  transform: perspective(1000px) translateZ(20px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  list-style: none;
  margin: 5px 0 0 0;

  li {
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Dropdown3D = ({ children, className, label }: Dropdown3DProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef} className={className}>
      <DropdownToggle onClick={toggleDropdown}>{label}</DropdownToggle>
      <DropdownMenu isOpen={isOpen}>
        {children}
      </DropdownMenu>
    </DropdownContainer>
  );
};