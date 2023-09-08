import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import UseEffects from "./components/UseEffects";
import UseRef from "./components/UseRef";
import UseLayoutEffect from "./components/UseLayoutEffect";
import ImperativeHandle from "./components/ImperativeHandle";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";
import UseCallBack from "./components/UseCallBack";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
}

function App() {
  return (
<ThemeProvider theme={theme}>
<>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
</ThemeProvider>
  );
}

export default App;

{
  /* <UseState /> */
}
{
  /* <UseReducer /> */
}
{
  /* <UseEffects /> */
}
{
  /* <UseRef /> */
}
{
  /* <UseLayoutEffect /> */
}
{
  /* <ImperativeHandle /> */
}
{
  /* <UseContext /> */
}
{
  /* <UseMemo /> */
}
{
  /* <UseCallBack /> */
}
