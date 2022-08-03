import React from 'react'
import Main from './pages/Main'
import Footer from './components/Footer'
import './App.css';
import Apply from './pages/Apply';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from "./pages/Signup"
import Header from './components/Header';
import Signin from './pages/Signin';


function App() {
  return (
    <div>
      <div className='header'>
        <Header/>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/apply" element={<Apply />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </Router>
      
      <div className='footer'>
        <Footer/>
      </div>
      
    </div>
    
  )
}

export default App