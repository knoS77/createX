import React from 'react';
import {Route, Routes} from "react-router-dom";
// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Contacts from './Pages/Contacts';

const App:React.FC = () => {

  return(
    <>
      <Header/>
      <Routes>
          <Route path='*' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/Contacts' element={<Contacts/>} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App;
