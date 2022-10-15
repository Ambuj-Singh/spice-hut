import './App.css';
import Navbar from './components/navbar.js'
import About from './pages/aboutus';
import Location from './pages/locations';
import Menu from './pages/menus';
import Home from './pages/home'

import {BrowserRouter as Router} from 'react-router-dom'

import {Route,Routes,useLocation} from 'react-router-dom'

const App =() => {
  return (
    <>
    {/* header navbar */}

    <div>
     
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/menus' element={<Menu/>}/>
      </Routes>
    </Router>
    </div>

    </>
  );
};

export default App;
