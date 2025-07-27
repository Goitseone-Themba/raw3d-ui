import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { useContext } from 'react';
import { SoundContext } from '../context/SoundContext';
/**
 * A toggle button to mute or unmute sound effects.
 * @component
 * @param {MuteSwitchProps} props - The properties for the MuteSwitch component.
 * @returns {JSX.Element} The rendered mute switch.
 * @example
 * ```tsx
 * import { MuteSwitch } from 'raw3d-ui';
 *
 * function App() {
 *   return <MuteSwitch className="custom-class" />;
 * }
 * ```
 */
const MuteSwitchStyled = styled.button `
  position: fixed;
  top: 16px;
  left: 16px;
  padding: 8px;
  background-color: #d1d5db;
  border-radius: 6px;
  border: 2px solid #1f2937;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    background-color: #e5e7eb;
  }

  &:active {
    transform: translateY(2px);
  }
`;
/**
 * A toggle button to mute or unmute sound effects.
 * @component
 * @param {MuteSwitchProps} props - The properties for the MuteSwitch component.
 * @returns {JSX.Element} The rendered mute switch.
 * @example
 * ```tsx
 * import { MuteSwitch } from 'raw3d-ui';
 *
 * function App() {
 *   return <MuteSwitch />;
 * }
 * ```
 */
export const MuteSwitch = ({ className }) => {
    const { soundOn, toggleSound } = useContext(SoundContext);
    return (_jsx(MuteSwitchStyled, { className: className, onClick: toggleSound, "aria-label": soundOn ? 'Mute sound' : 'Unmute sound', children: soundOn ? '🔊' : '🔇' }));
};
//# sourceMappingURL=MuteSwitch.js.map