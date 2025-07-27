// src/components/Item3D.tsx
import styled from 'styled-components';
const Item3D = styled.li `
  background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
  border-radius: 6px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) rotateX(10deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: perspective(1000px) rotateX(0deg) scale(1.05);
  }
`;
export { Item3D };
//# sourceMappingURL=Item3D.js.map