import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LandingPage from './pages/LandingPage/LandingPage';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { ChakraProvider } from '@chakra-ui/react';
import './App.scss';
import NavBarSite from './components/NavBar/NavBar';
import CurrentProjects from './pages/CurrentProjects/CurrentProjects';
import Gallery from './pages/Gallery/Gallery';
import GlobalEntryPage from './pages/GlobalEntry/GlobalEntryPage';
import GlobalEntrySignup from './pages/GlobalEntry/Signup/GlobalEntrySignup';
import RegisterCallbackPage from './pages/Spotify/RegisterCallback/RegisterCallbackPage';
import SpotifyPage from './pages/Spotify/SpotifyPage';

function App() {
  return (

    <ChakraProvider>
      <RecoilRoot>
        <BrowserRouter>
          <div className='App'>
              <NavBarSite/>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/current-projects" element={<CurrentProjects/>} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/spotify">
                <Route index element={<SpotifyPage/>} />
                <Route path="register-callback" element={<RegisterCallbackPage/>} />
              </Route>
              <Route path="/globalEntry">
                <Route index element={<GlobalEntryPage/>} />
                <Route path="signup" element={<GlobalEntrySignup/>} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
