import { useState } from 'react' 

//style
import './app.scss'

//Components
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portafolio from "./components/portafolio/Portafolio";
import Works from "./components/works/Works";
import Tetimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from './components/menu/Menu';
import Skill from './components/skill/Skill';
import RedesSocial from './components/socialRed/redesSocial';

function App() {
  
  const[menuOpen,setMenuOpen] = useState(false)

  return (
    
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <RedesSocial/>
      <div className="sections">
        <Intro/>
        <Skill/>
        <Portafolio/>
        <Works/>
        <Tetimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
