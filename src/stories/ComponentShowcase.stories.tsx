import { SoundProvider, Button3D, Card3D, Input3D, Alert3D, ProgressBar3D, useSound } from '../';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const ShowcaseComponent = () => {
  const { playClick, playHover, playSuccess } = useSound();
  const [inputValue, setInputValue] = useState('');
  const [progress, setProgress] = useState(30);

  const handleProgressClick = () => {
    setProgress(Math.min(100, progress + 10));
    playSuccess();
  };

  return (
    <div style={{ 
      padding: '40px', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          color: 'white', 
          textAlign: 'center', 
          fontSize: '3rem', 
          marginBottom: '40px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          raw3d-ui Component Showcase
        </h1>

        {/* Buttons Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>🎯 Interactive Buttons</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Button3D variant="keycap" onClick={playClick}>Mechanical Keycap</Button3D>
            <Button3D variant="drawn" onClick={playClick}>Drawn Style</Button3D>
            <Button3D variant="keycap" onClick={playSuccess}>Success Action</Button3D>
            <Button3D variant="drawn" onClick={playClick}>← Navigation</Button3D>
            <Button3D variant="keycap" onClick={playClick}>→ Navigation</Button3D>
          </div>
        </section>

        {/* Cards Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>🃏 3D Cards</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <Card3D onClick={playClick}>
              <h3>Interactive Card</h3>
              <p>Click me to hear the sound effect! This card has 3D perspective and hover animations.</p>
            </Card3D>
            <Card3D onClick={playClick}>
              <h3>Feature Card</h3>
              <p>Experience the tactile feel of our 3D components with immersive sound feedback.</p>
            </Card3D>
            <Card3D onClick={playClick}>
              <h3>Community Card</h3>
              <p>Built for the Log It Raw community - bringing satisfying interactions to the web.</p>
            </Card3D>
          </div>
        </section>

        {/* Form Elements Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>📝 Form Elements</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Input3D 
              type="text" 
              placeholder="Type something..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={playHover}
            />
            <Button3D variant="keycap" onClick={playSuccess}>Submit</Button3D>
          </div>
        </section>

        {/* Alerts Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>🚨 Alert Messages</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Alert3D title="Success!" variant="success">
              Your action was completed successfully! 🎉
            </Alert3D>
            <Alert3D title="Information" variant="info">
              This is an informational message with 3D styling.
            </Alert3D>
            <Alert3D title="Warning" variant="warning">
              Please be careful with this action! ⚠️
            </Alert3D>
            <Alert3D title="Error" variant="error">
              Something went wrong. Please try again! ❌
            </Alert3D>
          </div>
        </section>

        {/* Progress Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>📊 Progress Indicators</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p style={{ color: 'white', marginBottom: '10px' }}>Progress: {progress}%</p>
              <ProgressBar3D value={progress} />
            </div>
            <Button3D variant="drawn" onClick={handleProgressClick}>
              Increase Progress
            </Button3D>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: 'center', marginTop: '60px' }}>
          <Card3D onClick={playSuccess}>
            <h2 style={{ marginBottom: '20px' }}>Ready to Build Something Amazing?</h2>
            <p style={{ marginBottom: '30px' }}>
              Start using raw3d-ui in your next project and bring tactile, satisfying interactions to your web applications.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button3D variant="keycap" onClick={playClick}>Get Started</Button3D>
              <Button3D variant="drawn" onClick={playClick}>View Documentation</Button3D>
            </div>
          </Card3D>
        </section>
      </div>
    </div>
  );
};

const meta: Meta<typeof ShowcaseComponent> = {
  title: 'Showcase/All Components',
  component: ShowcaseComponent,
  decorators: [
    (Story) => (
      <SoundProvider>
        <Story />
      </SoundProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Component Showcase

This showcase demonstrates all the 3D components working together with sound effects. Perfect for:

- **X.com demos** - Interactive showcase of the library
- **Developer onboarding** - See all components in action
- **Feature demonstration** - Visual and audio feedback working together

### Features Demonstrated:
- **Mechanical Keycap Buttons** - Tactile 3D buttons with sound
- **3D Cards** - Interactive cards with perspective effects
- **Form Elements** - Input fields with hover sounds
- **Alert Messages** - 4 different variants with 3D styling
- **Progress Indicators** - Interactive progress bars
- **Sound Integration** - Audio feedback on all interactions

Try clicking and hovering over the components to experience the full effect!
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShowcaseComponent>;

export const Default: Story = {};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}; 