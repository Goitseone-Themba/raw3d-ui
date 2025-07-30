import { useContext, useCallback } from 'react';
import { SoundContext, type SoundConfig } from '../context/SoundContextTypes';

/**
 * Custom hook for easy sound integration in components
 * @returns {Object} Object containing sound utilities
 * @returns {Function} returns.playSound - Function to play a sound with config
 * @returns {Function} returns.playClick - Function to play a click sound
 * @returns {Function} returns.playHover - Function to play a hover sound
 * @returns {Function} returns.playSuccess - Function to play a success sound
 * @returns {Function} returns.playError - Function to play an error sound
 * @returns {boolean} returns.soundOn - Whether sound is enabled
 * @returns {Function} returns.toggleSound - Function to toggle sound on/off
 * 
 * @example
 * ```tsx
 * import { useSound } from 'raw3d-ui';
 * 
 * function MyComponent() {
 *   const { playClick, playHover } = useSound();
 *   
 *   return (
 *     <button 
 *       onClick={playClick}
 *       onMouseEnter={playHover}
 *     >
 *       Click me!
 *     </button>
 *   );
 * }
 * ```
 */
export const useSound = () => {
  const { soundOn, toggleSound, playSound } = useContext(SoundContext);

  const playClick = useCallback(() => {
    playSound({
      src: '/sounds/click.wav',
      volume: 0.6,
      playbackRate: 1.0
    });
  }, [playSound]);

  const playHover = useCallback(() => {
    playSound({
      src: '/sounds/hover.wav',
      volume: 0.3,
      playbackRate: 1.0
    });
  }, [playSound]);

  const playSuccess = useCallback(() => {
    playSound({
      src: '/sounds/success.wav',
      volume: 0.7,
      playbackRate: 1.0
    });
  }, [playSound]);

  const playError = useCallback(() => {
    playSound({
      src: '/sounds/error.wav',
      volume: 0.5,
      playbackRate: 0.8
    });
  }, [playSound]);

  const playCustom = useCallback((config: SoundConfig) => {
    playSound(config);
  }, [playSound]);

  return {
    soundOn,
    toggleSound,
    playClick,
    playHover,
    playSuccess,
    playError,
    playCustom
  };
}; 