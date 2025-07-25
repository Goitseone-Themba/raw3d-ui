// src/components/Modal3D.tsx
import styled from 'styled-components';

const Modal3D = styled.div`
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
    transform: perspective(1000px) translateZ(60px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
  }
`;

export { Modal3D };
