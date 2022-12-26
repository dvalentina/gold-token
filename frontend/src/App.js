import styled from "styled-components";
import ConnectCard from "./components/ConnectCard";

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

function App() {
  return (
    <AppContainer>
      <ConnectCard />
    </AppContainer>
  );
}

export default App;
