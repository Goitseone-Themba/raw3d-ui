// src/components/Dropdown3D.tsx
import styled from 'styled-components';

const Dropdown3D = styled.div`
  position: relative;
  font-family: 'Comic Sans MS', cursive, sans-serif;

  .dropdown-toggle {
    background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
    border: 2px solid #d4d4c4;
    border-radius: 6px;
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: perspective(1000px) translateZ(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: perspective(1000px) translateZ(15px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  }

  .dropdown-menu {
    background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
    border: 2px solid #d4d4c4;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    transform: perspective(1000px) translateZ(20px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    list-style: none;

    li {
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background: #e0e0d0;
      }
    }
  }
`;

export { Dropdown3D };
