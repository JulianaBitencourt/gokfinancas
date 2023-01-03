import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import {GlobalStyles} from "./GlobalStyles";
import Header from "./components/header";
import theme from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Home/>
  </ThemeProvider>
);

}

export default App;
