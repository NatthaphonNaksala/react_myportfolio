import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'

// Contents
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
// react-router-dom V6
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
            <Routes>
                <Route path="/about" element={<About />}/>
            </Routes>
            <Routes>
                <Route path="/education" element={<Education />}/>
            </Routes>
            <Routes>
                <Route path="/skills" element={<Skills />}/>
            </Routes>
            <Routes>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
      </div>
    </BrowserRouter>
  ) 
}

export default App;



/*
 <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
*/ 