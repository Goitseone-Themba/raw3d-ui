import { useContext } from 'react';
import { SoundContext } from '../context/SoundContext';

export const MuteSwitch = () => {
  const { soundOn, toggleSound } = useContext(SoundContext);
  return (
    <button
      onClick={toggleSound}
      className="fixed top-4 left-4 p-2 bg-gray-200 rounded-lg border-2 border-gray-800"
      aria-label={soundOn ? 'Mute sound' : 'Unmute sound'}
    >
      {soundOn ? '🔊' : '🔇'}
    </button>
  );
};
