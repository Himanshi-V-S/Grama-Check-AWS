import React from 'react'
import Main from './pages/Main'
import './App.css';
import Apply from './pages/Apply';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ApplyPoliceReport from "./pages/ApplyPoliceReport"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/apply" element={<Apply />}></Route>
          <Route path="/applyPoliceReport" element={<ApplyPoliceReport />}></Route>
        </Routes>
      </Router>
      
      
      
    </div>
    
  )
}

export default App