import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { myLib } from '@react/my-lib';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  myLib();
  return (
    <StyledApp>
      <NxWelcome title="web-app" />
    </StyledApp>
  );
}

export default App;
