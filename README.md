# raw3d-ui

A 3D UI component library with immersive sound effects for React applications.

## Description

`raw3d-ui` provides a set of 3D components that enhance user interaction with immersive visuals and satisfying sound effects. Inspired by mechanical keyboards and skeuomorphic design, this library creates engaging user interfaces that feel tactile and responsive.

## Features

- **🎨 3D Design Language** - Components with depth, perspective, and realistic shadows
- **🔊 Sound Integration** - Optional audio feedback with easy-to-use hooks
- **⌨️ Mechanical Keyboard Inspiration** - Keycap buttons that mimic real switches
- **🎯 TypeScript Support** - Fully typed components for better developer experience
- **🎨 Flexible Theming** - Customize colors, fonts, and shadows with styled-components
- **📚 Storybook Integration** - Interactive component playground and documentation

## Installation

Install `raw3d-ui` via npm:

```bash
npm install raw3d-ui
```

## Quick Start

```tsx
import { SoundProvider, Button3D, useSound } from 'raw3d-ui';

function App() {
  return (
    <SoundProvider>
      <Button3D variant="keycap">Mechanical Keycap</Button3D>
      <Button3D variant="drawn">Drawn Style</Button3D>
    </SoundProvider>
  );
}
```

## Sound System

The library includes a powerful sound system that makes it easy to add audio feedback to your components.

### Using Pre-configured Sounds

```tsx
import { useSound } from 'raw3d-ui';

function MyComponent() {
  const { playClick, playHover, playSuccess, playError } = useSound();
  
  return (
    <div>
      <button onClick={playClick} onMouseEnter={playHover}>
        Interactive Button
      </button>
      <button onClick={playSuccess}>Success Action</button>
      <button onClick={playError}>Error Action</button>
    </div>
  );
}
```

### Custom Sounds

```tsx
import { useSound } from 'raw3d-ui';

function MyComponent() {
  const { playCustom } = useSound();
  
  const handleCustomAction = () => {
    playCustom({
      src: '/path/to/your/sound.wav',
      volume: 0.7,
      playbackRate: 1.2
    });
  };
  
  return <button onClick={handleCustomAction}>Custom Sound</button>;
}
```

### Global Sound Control

```tsx
import { useSound } from 'raw3d-ui';

function SoundToggle() {
  const { soundOn, toggleSound } = useSound();
  
  return (
    <button onClick={toggleSound}>
      {soundOn ? '🔊 Sound ON' : '🔇 Sound OFF'}
    </button>
  );
}
```

## Components

### Core Components
- `Button3D` - 3D buttons with 'keycap' and 'drawn' variants
- `Card3D` - 3D cards with perspective and hover effects
- `Input3D` - 3D input fields
- `Modal3D` - 3D modal dialogs
- `Dropdown3D` - 3D dropdown menus
- `Navbar3D` - 3D navigation bars
- `Table3D` - 3D table components
- `Alert3D` - 3D alert messages with variants
- `Tooltip3D` - 3D tooltips
- `ProgressBar3D` - 3D progress bars

### Sound Components
- `SoundProvider` - Context provider for sound management
- `MuteSwitch` - Global sound toggle component

### Hooks
- `useSound` - Hook for easy sound integration

## Theming

Customize the look and feel with styled-components:

```tsx
import { ThemeProvider } from 'styled-components';
import { Button3D } from 'raw3d-ui';

const customTheme = {
  colors: {
    primary: '#2c3e50',
    secondary: '#34495e',
    border: '#2c3e50',
    text: '#ecf0f1',
    accent: '#e74c3c',
  },
  fonts: {
    main: 'Arial, sans-serif',
  },
  shadows: {
    light: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
    dark: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Button3D>Custom Themed Button</Button3D>
    </ThemeProvider>
  );
}
```

## Development

### Storybook
Run Storybook to explore components interactively:

```bash
npm run storybook
```

### Build
Build the library for production:

```bash
npm run build
```

## Community

Built for the **Log It Raw community** - bringing tactile, satisfying interactions to the web.

## License

This project is licensed under the MIT License.
