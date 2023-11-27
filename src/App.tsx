import { ThemeProvider } from "styled-components";
import MainRouter from "./MainRouter";
import { theme } from "./style/Theme";
import { GlobalStyle } from "./style/GlobalStyle.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
