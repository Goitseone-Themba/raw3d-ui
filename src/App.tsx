import { SoundProvider } from './context/SoundContext';
import { Button3D, Input3D, Card3D, Modal3D, Dropdown3D, Navbar3D, Table3D, Alert3D, Tooltip3D, ProgressBar3D } from '.';
import styled from 'styled-components';

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
    <SoundProvider>
      <AppContainer>
        <Button3D variant="drawn">Drawn Button</Button3D>
        <Button3D variant="keycap">Keycap Button</Button3D>
        <Input3D type="text" placeholder="Input" />
        <Card3D>Card</Card3D>
        <Modal3D>Modal</Modal3D>
        <Dropdown3D>
          <div className="dropdown-toggle">Dropdown</div>
          <ul className="dropdown-menu">
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
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
        <Alert3D>Alert</Alert3D>
        <Tooltip3D>
          <span>Hover me</span>
          <div className="tooltip-text">Tooltip text</div>
        </Tooltip3D>
        <ProgressBar3D>
          <div className="progress" style={{ width: '50%' }}></div>
        </ProgressBar3D>
      </AppContainer>
    </SoundProvider>
  );
}
