import styled from "styled-components";
import MainPage from "./pages/MainPage";
import WalletProvider from "./contexts/WalletContext";
import TokenProvider from "./contexts/TokenContext";
import NoWalletPage from "./pages/NoWalletPage";
import ToastProvider from "./contexts/ToastContext";

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
    <AppContainer>
      <ToastProvider>
        {window.ethereum ? (
          <WalletProvider>
            <TokenProvider>
              <MainPage />
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
