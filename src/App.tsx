import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.scss';
import NavBarSite from './components/NavBar/NavBar';
import CurrentProjects from './pages/CurrentProjects/CurrentProjects';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (

    <RecoilRoot>
      <BrowserRouter>
        <div className='App'>
            <NavBarSite/>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/current-projects" element={<CurrentProjects/>} />
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
