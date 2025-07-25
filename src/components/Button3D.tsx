// src/components/Button3D.tsx
import styled from 'styled-components';
import React, { useContext } from 'react';
import { SoundContext } from '../context/SoundContext';
import clickSound from '../assets/keyboard-key-release.wav';

/**
 * Props for the Button3D component.
 * @interface Button3DProps
 * @property {string | React.ReactNode} children - The content inside the button (e.g., arrow symbols or simple elements). Required.
 * @property {string} [className] - Additional CSS classes for customization. Optional.
 * @property {string} ['aria-label'] - Accessibility label for the button. Optional.
 * @property {'keycap' | 'drawn'} [variant] - The style variant of the button. Defaults to 'drawn'.
 */
interface Button3DProps {
  children: string | React.ReactNode;
  className?: string;
  'aria-label'?: string;
  variant?: 'keycap' | 'drawn';
}

const DrawnButton = styled.button`
  background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
  border: 2px solid #d4d4c4;
  border-radius: 6px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) translateZ(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 1rem;
  color: #333;

  &:hover {
    transform: perspective(1000px) translateZ(15px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: perspective(1000px) translateZ(5px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const KeycapButton = styled.button`
  position: relative;
  width: auto;
  height: auto;
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  perspective: 1000px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 1rem;
  color: #333;

  .top {
    width: 100%;
    height: 100%;
    padding: 12px 24px;
    background: linear-gradient(145deg, #f5f5e8, #e0e0d0);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 2px solid #2a2a2a;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    transform: translateZ(10px);
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

    &:hover {
      background: linear-gradient(145deg, #ffffff, #e5e5d5);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateZ(0) translateY(8px);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 50%);
      opacity: 0.5;
    }
  }

  .bottom {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #d0d0c0, #b0b0a0);
    top: 8px;
    left: 0;
    border-radius: 6px;
    border: 2px solid #2a2a2a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: -1;
    transform: translateZ(0);

    &:active {
      transform: translateZ(-5px) translateY(4px);
    }
  }

  .base {
    position: absolute;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background: linear-gradient(145deg, #8c8c8c, #6b6b6b);
    top: 12px;
    left: -1px;
    border-radius: 6px;
    border: 2px solid #2a2a2a;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    z-index: -2;
    transform: translateZ(-10px);
  }
`;

/**
 * A 3D button component with a mechanical keycap design and sound effects.
 * @component
 * @param {Button3DProps} props - The properties for the Button3D component.
 * @returns {JSX.Element} The rendered 3D button.
 * @example
 * ```tsx
 * import { SoundProvider, Button3D } from 'raw3d-ui';
 *
 * function App() {
 *   return (
 *     <SoundProvider>
 *       <Button3D variant="keycap" aria-label="Left Arrow">←</Button3D>
 *       <Button3D variant="drawn" aria-label="Right Arrow">→</Button3D>
 *     </SoundProvider>
 *   );
 * }
 * ```
 */
export const Button3D = ({ children, className, 'aria-label': ariaLabel, variant = 'drawn' }: Button3DProps) => {
  const { soundOn } = useContext(SoundContext);
  const playSound = () => {
    if (soundOn) new Audio(clickSound).play();
  };

  return (
    <>
      {variant === 'keycap' ? (
        <KeycapButton className={className} onClick={playSound} aria-label={ariaLabel}>
          <div className="top">{children}</div>
          <div className="bottom" />
          <div className="base" />
        </KeycapButton>
      ) : (
        <DrawnButton className={className} onClick={playSound} aria-label={ariaLabel}>
          {children}
        </DrawnButton>
      )}
    </>
  );
};
