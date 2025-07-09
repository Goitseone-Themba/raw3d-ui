import { Button3D, SoundProvider } from '../';
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
};

export default meta;
type Story = StoryObj<typeof Button3D>;

export const LeftArrow: Story = {
  args: {
    children: '←',
    'aria-label': 'Left Arrow',
  },
};

export const RightArrow: Story = {
  args: {
    children: '→',
    'aria-label': 'Right Arrow',
  },
};
