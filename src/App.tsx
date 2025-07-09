import { SoundProvider } from './context/SoundContext';
import { Button3D, MuteSwitch } from '.';
import './index.css';

export default function App() {
  return (
    <SoundProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#d4c9e0] to-[#e0d6eb] flex items-center justify-center gap-4">
        <MuteSwitch />
        <Button3D aria-label="Left Arrow">←</Button3D>
        <Button3D aria-label="Right Arrow">→</Button3D>
      </div>
    </SoundProvider>
  );
}
