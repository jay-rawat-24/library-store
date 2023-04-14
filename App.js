import React from "react";
import Main from "./Components/Main";
import "./Components/style.css"
import Page from "./Components/Page"
import Navbar from "./Components/Navbar";
import Services from "./Components/Services"
import Signup from "./Components/Signup"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About2 from "./Components/About2";
import Discord from './Components/Discord'

function App() {
  return (
    <>
     <Router>
          <Navbar/>
        <Routes>
        <Route path="/" element={<Page/>} /> 
        <Route path="/Services" element={<Services />} />
          <Route path="/main" element={<Main />} />
          <Route path="/About2" element={<About2 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/discord" element={<Discord />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

