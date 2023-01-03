import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import {GlobalStyles} from "./GlobalStyles";
import Header from "./components/header";
import {theme} from "./theme/theme";
import Footer from "./components/footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Home/>
    <Footer/>
  </ThemeProvider>
);

}

export default App;
