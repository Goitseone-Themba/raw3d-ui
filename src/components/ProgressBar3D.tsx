// src/components/ProgressBar3D.tsx
import styled from 'styled-components';

const ProgressBar3D = styled.div`
  background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
  border: 2px solid #d4d4c4;
  border-radius: 6px;
  padding: 2px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Comic Sans MS', cursive, sans-serif;

  .progress {
    background: linear-gradient(90deg, #ff6b6b, #feca57);
    height: 20px;
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  &:hover {
    transform: perspective(1000px) translateZ(15px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export { ProgressBar3D };
