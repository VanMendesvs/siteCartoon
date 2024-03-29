import React from "react";
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
}
`
function App() {
  return(
<>
<Header />
<Main />
<Footer/>
<GlobalStyle />
</>
  )
}
export default App