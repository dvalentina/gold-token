import styled from "styled-components";
import MainPage from "./components/MainPage";
import WalletProvider from "./contexts/WalletContext";
import TokenProvider from "./contexts/TokenContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

function App() {
  return (
    <WalletProvider>
      <TokenProvider>
        <AppContainer>
          <MainPage />
        </AppContainer>
      </TokenProvider>
    </WalletProvider>
  );
}

export default App;
