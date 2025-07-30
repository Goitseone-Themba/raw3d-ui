import styled from 'styled-components';

const Tooltip3D = styled.div`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.main};

  .tooltip-text {
    visibility: hidden;
    background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    padding: 5px 10px;
    box-shadow: ${({ theme }) => theme.shadows.light};
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
      border-color: ${({ theme }) => theme.colors.border} transparent transparent transparent;
    }
  }

  &:hover .tooltip-text {
    visibility: visible;
    transform: perspective(1000px) translateZ(25px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export { Tooltip3D };
