import styled from "styled-components";
import ConnectCard from "./components/ConnectCard";
import WalletProvider from "./contexts/WalletContext";

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

function App() {
  return (
    <WalletProvider>
      <AppContainer>
        <ConnectCard />
      </AppContainer>
    </WalletProvider>
  );
}

export default App;
