import { createContext, type ReactNode, useState } from 'react';

/**
 * The context type for sound management.
 * @interface SoundContextType
 * @property {boolean} soundOn - Whether sound effects are enabled.
 * @property {() => void} toggleSound - Function to toggle sound on/off.
 */
interface SoundContextType {
  soundOn: boolean;
  toggleSound: () => void;
}

export const SoundContext = createContext<SoundContextType>({
  soundOn: true,
  toggleSound: () => {},
});

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
  const toggleSound = () => setSoundOn(!soundOn);
  return (
    <SoundContext.Provider value={{ soundOn, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};
