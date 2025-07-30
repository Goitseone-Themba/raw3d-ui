import { type ReactNode, useState, useCallback } from 'react';
import { SoundContext, type SoundConfig } from './SoundContextTypes';

/**
 * Provides sound management context to child components.
 * @component
 * @param {Object} props - The properties for the SoundProvider component.
 * @param {ReactNode} props.children - The child components to wrap with sound context.
 * @returns {JSX.Element} The rendered SoundProvider.
 * @example
 * ```tsx
 * import { SoundProvider, Button3D } from 'raw3d-ui';
 *
 * function App() {
 *   return (
 *     <SoundProvider>
 *       <Button3D aria-label="Left Arrow">←</Button3D>
 *     </SoundProvider>
 *   );
 * }
 * ```
 */
export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [soundOn, setSoundOn] = useState(true);
  
  const toggleSound = useCallback(() => setSoundOn(!soundOn), [soundOn]);
  
  const createAudio = useCallback((config: SoundConfig): HTMLAudioElement => {
    const audio = new Audio(config.src);
    audio.volume = config.volume ?? 0.5;
    audio.playbackRate = config.playbackRate ?? 1;
    return audio;
  }, []);
  
  const playSound = useCallback((config: SoundConfig) => {
    if (soundOn) {
      const audio = createAudio(config);
      audio.play().catch(console.error);
    }
  }, [soundOn, createAudio]);

  return (
    <SoundContext.Provider value={{ soundOn, toggleSound, playSound, createAudio }}>
      {children}
    </SoundContext.Provider>
  );
};
