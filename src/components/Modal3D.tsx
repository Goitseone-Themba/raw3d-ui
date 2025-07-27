import React from 'react';
import styled from 'styled-components';

interface Modal3DProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
  border: 2px solid #d4d4c4;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  transform: perspective(1000px) translateZ(50px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  font-family: 'Comic Sans MS', cursive, sans-serif;

  &:hover {
    transform: translate(-50%, -50%) perspective(1000px) translateZ(60px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
  }
`;

export const Modal3D = ({ children, className, isOpen, onClose }: Modal3DProps) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={onClose} />
      <ModalContainer className={className}>
        {children}
      </ModalContainer>
    </>
  );
};