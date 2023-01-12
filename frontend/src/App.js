import styled from "styled-components";
import WalletProvider from "./contexts/WalletContext";
import TokenProvider from "./contexts/TokenContext";
import NoWalletPage from "./pages/NoWalletPage";
import ToastProvider from "./contexts/ToastContext";
import RoutesComponent from "./routes";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: scroll;
`;

function App() {
  return (
    <AppContainer id="app">
      <ToastProvider>
        {window.ethereum ? (
          <WalletProvider>
            <TokenProvider>
              <RoutesComponent />
            </TokenProvider>
          </WalletProvider>
        ) : (
          <NoWalletPage />
        )}
      </ToastProvider>
    </AppContainer>
  );
}

export default App;
