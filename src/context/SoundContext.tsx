import { createContext, ReactNode, useState } from "react";

interface SoundContextType {
    soundOn: boolean;
    toggleSound: () => void;
}

export const SoundContext = createContext<SoundContextType>({
    soundOn: true,
    toggleSound: () => {},
});

export const SoundProvider = ({ children }: { children: ReactNode }) => {
    const [soundOn, setSoundOn] = useState(true);
    const toggleSound = () => setSoundOn(!soundOn);
    return (
        <SoundContext.Provider value={{ soundOn, toggleSound }}>
            {children}
        </SoundContext.Provider>
    );
};
