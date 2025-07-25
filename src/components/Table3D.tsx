// src/components/Table3D.tsx
import styled from 'styled-components';

const Table3D = styled.table`
  background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
  border: 2px solid #d4d4c4;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Comic Sans MS', cursive, sans-serif;

  th, td {
    padding: 10px;
    border-bottom: 1px solid #d4d4c4;
  }

  th {
    background: #e0e0d0;
  }

  &:hover {
    transform: perspective(1000px) translateZ(15px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export { Table3D };
