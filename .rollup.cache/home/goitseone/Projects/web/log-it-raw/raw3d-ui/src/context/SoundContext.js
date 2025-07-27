import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
export const SoundContext = createContext({
    soundOn: true,
    toggleSound: () => { },
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
export const SoundProvider = ({ children }) => {
    const [soundOn, setSoundOn] = useState(true);
    const toggleSound = () => setSoundOn(!soundOn);
    return (_jsx(SoundContext.Provider, { value: { soundOn, toggleSound }, children: children }));
};
//# sourceMappingURL=SoundContext.js.map