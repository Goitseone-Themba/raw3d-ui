import { SoundProvider, Button3D, useSound } from '../';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// Custom component demonstrating the useSound hook
const SoundDemoComponent = () => {
  const { playClick, playHover, playSuccess, playError, playCustom, soundOn, toggleSound } = useSound();
  const [message, setMessage] = useState('');

  const handleSuccess = () => {
    playSuccess();
    setMessage('Success! 🎉');
    setTimeout(() => setMessage(''), 2000);
  };

  const handleError = () => {
    playError();
    setMessage('Error! ❌');
    setTimeout(() => setMessage(''), 2000);
  };

  const handleCustomSound = () => {
    playCustom({
      src: '/sounds/custom.wav',
      volume: 0.8,
      playbackRate: 1.2
    });
    setMessage('Custom sound! 🎵');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={toggleSound} style={{ padding: '8px 16px', borderRadius: '4px' }}>
          {soundOn ? '🔊 Sound ON' : '🔇 Sound OFF'}
        </button>
        <span>Toggle sound effects</span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <button 
          onClick={playClick}
          onMouseEnter={playHover}
          style={{ padding: '12px 24px', borderRadius: '6px', border: '2px solid #333' }}
        >
          Click & Hover Sound
        </button>

        <button 
          onClick={handleSuccess}
          style={{ padding: '12px 24px', borderRadius: '6px', border: '2px solid #28a745', backgroundColor: '#d4edda' }}
        >
          Success Sound
        </button>

        <button 
          onClick={handleError}
          style={{ padding: '12px 24px', borderRadius: '6px', border: '2px solid #dc3545', backgroundColor: '#f8d7da' }}
        >
          Error Sound
        </button>

        <button 
          onClick={handleCustomSound}
          style={{ padding: '12px 24px', borderRadius: '6px', border: '2px solid #6f42c1', backgroundColor: '#e2d9f3' }}
        >
          Custom Sound
        </button>
      </div>

      {message && (
        <div style={{ 
          padding: '10px', 
          backgroundColor: '#f8f9fa', 
          border: '1px solid #dee2e6', 
          borderRadius: '4px',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {message}
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h4>3D Components with Sound:</h4>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <SoundProvider>
            <Button3D variant="keycap" onClick={playClick}>Keycap</Button3D>
            <Button3D variant="drawn" onClick={playClick}>Drawn</Button3D>
          </SoundProvider>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof SoundDemoComponent> = {
  title: 'Sound System/useSound Hook',
  component: SoundDemoComponent,
  decorators: [
    (Story) => (
      <SoundProvider>
        <Story />
      </SoundProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
## useSound Hook

The \`useSound\` hook provides an easy way to add sound effects to your components. It includes pre-configured sounds for common interactions and allows custom sound configuration.

### Features:
- **Pre-configured sounds**: click, hover, success, error
- **Custom sound support**: Use your own audio files
- **Volume and playback rate control**: Fine-tune audio parameters
- **Global sound toggle**: Respects user preferences

### Usage:
\`\`\`tsx
import { useSound } from 'raw3d-ui';

function MyComponent() {
  const { playClick, playHover, playSuccess, playError, playCustom } = useSound();
  
  return (
    <button 
      onClick={playClick}
      onMouseEnter={playHover}
    >
      Interactive Button
    </button>
  );
}
\`\`\`

### Custom Sounds:
\`\`\`tsx
const { playCustom } = useSound();

playCustom({
  src: '/path/to/your/sound.wav',
  volume: 0.7,
  playbackRate: 1.2
});
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SoundDemoComponent>;

export const Default: Story = {};

export const CodeExample: Story = {
  parameters: {
    docs: {
      description: {
        component: `
## Complete Example

Here's a complete example showing how to integrate sounds into a custom component:

\`\`\`tsx
import { useSound, SoundProvider } from 'raw3d-ui';

function InteractiveCard() {
  const { playClick, playHover, playSuccess } = useSound();
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    playSuccess();
  };

  return (
    <div 
      onMouseEnter={playHover}
      onClick={playClick}
      style={{ 
        padding: '20px', 
        border: '2px solid #333',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      <h3>Interactive Card</h3>
      <p>Hover and click to hear sounds!</p>
      <button onClick={handleLike}>
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
}

function App() {
  return (
    <SoundProvider>
      <InteractiveCard />
    </SoundProvider>
  );
}
\`\`\`
        `,
      },
    },
  },
}; 