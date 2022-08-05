import React from 'react'
import Main from './pages/Main'
import Footer from './components/Footer'
import './App.css';
import Apply from './pages/Apply';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ApplyPoliceReport from "./pages/ApplyPoliceReport"
import Header from './components/Header';
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <div className='header'>
        <Header/>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/apply" element={<Apply />}></Route>
          <Route path="/applyPoliceReport" element={<ApplyPoliceReport />}></Route>
        </Routes>
      </Router>
      
      <div className='footer'>
        <Footer/>
      </div>
      
    </div>
    
  )
}

export default App