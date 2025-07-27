import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SoundProvider } from './context/SoundContext';
import { Button3D, Input3D, Card3D, Modal3D, Dropdown3D, Navbar3D, Table3D, Alert3D, Tooltip3D, ProgressBar3D } from '.';
import styled from 'styled-components';
const AppContainer = styled.div `
  min-height: 100vh;
  background: linear-gradient(to bottom right, #d4c9e0, #e0d6eb);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;
export default function App() {
    return (_jsx(SoundProvider, { children: _jsxs(AppContainer, { children: [_jsx(Button3D, { variant: "drawn", children: "Drawn Button" }), _jsx(Button3D, { variant: "keycap", children: "Keycap Button" }), _jsx(Input3D, { type: "text", placeholder: "Input" }), _jsx(Card3D, { children: "Card" }), _jsx(Modal3D, { children: "Modal" }), _jsxs(Dropdown3D, { children: [_jsx("div", { className: "dropdown-toggle", children: "Dropdown" }), _jsxs("ul", { className: "dropdown-menu", children: [_jsx("li", { children: "Option 1" }), _jsx("li", { children: "Option 2" })] })] }), _jsxs(Navbar3D, { children: [_jsx("a", { href: "#", children: "Home" }), _jsx("a", { href: "#", children: "About" })] }), _jsxs(Table3D, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Header 1" }), _jsx("th", { children: "Header 2" })] }) }), _jsx("tbody", { children: _jsxs("tr", { children: [_jsx("td", { children: "Data 1" }), _jsx("td", { children: "Data 2" })] }) })] }), _jsx(Alert3D, { children: "Alert" }), _jsxs(Tooltip3D, { children: [_jsx("span", { children: "Hover me" }), _jsx("div", { className: "tooltip-text", children: "Tooltip text" })] }), _jsx(ProgressBar3D, { children: _jsx("div", { className: "progress", style: { width: '50%' } }) })] }) }));
}
//# sourceMappingURL=App.js.map