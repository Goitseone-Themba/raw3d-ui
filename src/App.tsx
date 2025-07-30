import { SoundProvider } from './context/SoundContext';
import { Button3D, Input3D, Card3D, Modal3D, Dropdown3D, Navbar3D, Table3D, Alert3D, Tooltip3D, ProgressBar3D } from '.';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #d4c9e0, #e0d6eb);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SoundProvider>
        <AppContainer>
          <Button3D variant="drawn">Drawn Button</Button3D>
          <Button3D variant="keycap">Keycap Button</Button3D>
          <Input3D type="text" placeholder="Input" />
          <Card3D>Card</Card3D>
          <Modal3D isOpen={true} onClose={() => {}}>Modal</Modal3D>
          <Dropdown3D label="Dropdown">
            <li>Option 1</li>
            <li>Option 2</li>
          </Dropdown3D>
          <Navbar3D>
            <a href="#">Home</a>
            <a href="#">About</a>
          </Navbar3D>
          <Table3D>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
            </tbody>
          </Table3D>
          <Alert3D title="Alert">Alert</Alert3D>
          <Tooltip3D>
            <span>Hover me</span>
            <div className="tooltip-text">Tooltip text</div>
          </Tooltip3D>
          <ProgressBar3D value={50} />
        </AppContainer>
      </SoundProvider>
    </ThemeProvider>
  );
}
