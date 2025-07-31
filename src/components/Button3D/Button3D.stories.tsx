import React from 'react';
import { Button3D } from './Button3D';
import { SoundProvider } from '../../';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button3D> = {
  title: 'Components/Button3D',
  component: Button3D,
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
        component: 'A 3D button inspired by mechanical keycaps. Supports sound and multiple variants.'
      }
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['keycap', 'drawn'],
    },
    onClick: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof Button3D>;

export const Keycap: Story = {
  args: {
    children: 'Keycap',
    variant: 'keycap',
    'aria-label': 'Keycap Button',
  },
};

export const Drawn: Story = {
  args: {
    children: 'Drawn',
    variant: 'drawn',
    'aria-label': 'Drawn Button',
  },
};

export const WithLongText: Story = {
  args: {
    children: 'This is a very long button label to test overflow',
    variant: 'keycap',
    'aria-label': 'Long Text Button',
  },
};

export const WithEmoji: Story = {
  args: {
    children: '🚀 Launch',
    variant: 'keycap',
    'aria-label': 'Emoji Button',
  },
};

export const Accessible: Story = {
  args: {
    children: 'Accessible',
    variant: 'keycap',
    'aria-label': 'Accessible Button',
  },
};

export const CustomOnClick: Story = {
  args: {
    children: 'Click Me',
    variant: 'keycap',
    'aria-label': 'Custom Click Button',
    onClick: () => alert('Button3D clicked!'),
  },
}; 