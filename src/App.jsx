import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer.jsx";
import {Route, Routes } from "react-router-dom";
// pages
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import News from "./Pages/News.jsx";
import Contacts from "./Pages/Contacts.jsx";

const App = () => {

  return(
  <>
    <Header/>
      <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    
    <Footer/>
 </>
  )
}

export default App