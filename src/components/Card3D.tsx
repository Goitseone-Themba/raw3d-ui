// src/components/Card3D.tsx
import styled from 'styled-components';

const Card3D = styled.div`
  background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
  border: 2px solid #d4d4c4;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transform: perspective(1000px) rotateX(10deg) rotateY(5deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-family: 'Comic Sans MS', cursive, sans-serif;

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

export { Card3D };
