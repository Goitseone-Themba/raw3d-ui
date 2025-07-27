import { jsx as _jsx } from "react/jsx-runtime";
import { Button3D, SoundProvider } from '../';
const meta = {
    title: 'Components/Button3D',
    component: Button3D,
    decorators: [
        (Story) => (_jsx(SoundProvider, { children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const LeftArrow = {
    args: {
        children: '←',
        'aria-label': 'Left Arrow',
    },
};
export const RightArrow = {
    args: {
        children: '→',
        'aria-label': 'Right Arrow',
    },
};
//# sourceMappingURL=Button3D.stories.js.map