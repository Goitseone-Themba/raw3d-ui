import styled from 'styled-components';

const Table3D = styled.table`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.main};

  th, td {
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    transform: perspective(1000px) translateZ(15px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export { Table3D };
