import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button3D } from './Button3D';

interface Alert3DProps {
  title: string;
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  onClose?: () => void;
  className?: string;
}

const variantStyles = {
  info: css`
    background: linear-gradient(145deg, #e6f7ff, #cceeff);
    border-color: #99ddff;
    color: #004085;
  `,
  success: css`
    background: linear-gradient(145deg, #e6fffa, #ccebe0);
    border-color: #99d6c2;
    color: #155724;
  `,
  warning: css`
    background: linear-gradient(145deg, #fffbe6, #fff0c2);
    border-color: #ffe580;
    color: #856404;
  `,
  error: css`
    background: linear-gradient(145deg, #ffe6e6, #ffcccc);
    border-color: #ff9999;
    color: #721c24;
  `,
};

const AlertContainer = styled.div<{ variant: 'info' | 'success' | 'warning' | 'error'; isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid #d4d4c4;
  border-radius: 6px;
  padding: 15px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  ${({ variant }) => variantStyles[variant]}

  &:hover {
    transform: perspective(1000px) translateZ(15px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const AlertContent = styled.div`
  margin-right: 15px;
`;

const AlertTitle = styled.h4`
  margin: 0 0 5px 0;
  font-weight: bold;
`;

const AlertMessage = styled.p`
  margin: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  color: inherit;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const Alert3D = ({
  title,
  children,
  variant = 'info',
  onClose,
  className,
}: Alert3DProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <AlertContainer variant={variant} isVisible={isVisible} className={className}>
      <AlertContent>
        <AlertTitle>{title}</AlertTitle>
        <AlertMessage>{children}</AlertMessage>
      </AlertContent>
      {onClose && <CloseButton onClick={handleClose}>&times;</CloseButton>}
    </AlertContainer>
  );
};