import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Home from "./pages/Home";
import React from "./pages/React";
import Dom from "./pages/Dom";
import ReactNative from "./pages/ReactNative";
import {Route,Routes}from 'react-router-dom'
import Footer from  './components/Footer'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
    
     
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/reactjs" element={<React/>}/>
      <Route path="/Dom" element={  <Dom/>}/>
      <Route path="/ReactNative" element={  <ReactNative/> }/>

      </Routes>
      <Footer/>
     
     
    </ThemeProvider>
  );
}

export default App;