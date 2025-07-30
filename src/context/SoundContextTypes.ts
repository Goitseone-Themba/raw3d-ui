import { createContext } from 'react';

/**
 * Sound configuration for components
 * @interface SoundConfig
 * @property {string} src - Path to the audio file
 * @property {number} [volume] - Volume level (0-1), defaults to 0.5
 * @property {number} [playbackRate] - Playback speed, defaults to 1
 */
export interface SoundConfig {
  src: string;
  volume?: number;
  playbackRate?: number;
}

/**
 * The context type for sound management.
 * @interface SoundContextType
 * @property {boolean} soundOn - Whether sound effects are enabled.
 * @property {() => void} toggleSound - Function to toggle sound on/off.
 * @property {(config: SoundConfig) => void} playSound - Function to play a custom sound.
 * @property {(config: SoundConfig) => HTMLAudioElement} createAudio - Function to create an audio element.
 */
export interface SoundContextType {
  soundOn: boolean;
  toggleSound: () => void;
  playSound: (config: SoundConfig) => void;
  createAudio: (config: SoundConfig) => HTMLAudioElement;
}

export const SoundContext = createContext<SoundContextType>({
  soundOn: true,
  toggleSound: () => {},
  playSound: () => {},
  createAudio: () => new Audio(),
}); 