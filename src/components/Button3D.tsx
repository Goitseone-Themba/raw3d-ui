import { useContext } from 'react';
import { SoundContext } from '../context/SoundContext';
import clickSound from '../assets/keyboard-key-release.wav';

interface Button3DProps {
  children: any; // Temporary, refine later
  className?: string;
  'aria-label'?: string;
}

export const Button3D = ({ children, className, 'aria-label': ariaLabel }: Button3DProps) => {
  const { soundOn } = useContext(SoundContext);
  const playSound = () => {
    if (soundOn) new Audio(clickSound).play();
  };

  return (
    <button
      className={`relative w-16 h-16 bg-none outline-none border-none p-0 m-0 cursor-pointer ${className}`}
      style={{ perspective: '1000px' }}
      onClick={playSound}
      aria-label={ariaLabel}
    >
      <div className="top">
        {children}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)] opacity-50" />
      </div>
      <div className="bottom">
        <div className="absolute w-[3px] h-2 bg-[#2a2a2a] bottom-0 left-[15%] rounded-sm" />
        <div className="absolute w-[3px] h-2 bg-[#2a2a2a] bottom-0 left-[85%] rounded-sm" />
      </div>
      <div className="absolute w-[calc(100%+2px)] h-[calc(100%+2px)] bg-gradient-to-br from-[#8c8c8c] to-[#6b6b6b] top-3 left-[-1px] rounded-lg border-2 border-[#2a2a2a] shadow-[0_6px_12px_rgba(0,0,0,0.4)] z-[-2]" />
    </button>
  );
};
