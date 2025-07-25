// src/components/Tooltip3D.tsx
import styled from 'styled-components';

const Tooltip3D = styled.div`
  position: relative;
  display: inline-block;
  font-family: 'Comic Sans MS', cursive, sans-serif;

  .tooltip-text {
    visibility: hidden;
    background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
    border: 2px solid #d4d4c4;
    border-radius: 6px;
    padding: 5px 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: perspective(1000px) translateZ(20px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    width: 120px;
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #d4d4c4 transparent transparent transparent;
    }
  }

  &:hover .tooltip-text {
    visibility: visible;
    transform: perspective(1000px) translateZ(25px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export { Tooltip3D };
