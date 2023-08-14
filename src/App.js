import logo from './logo.svg';
import './App.css';
import './Root.css';

import "bootstrap/dist/css/bootstrap.min.css";
import CyberNav from './components/CyberNav';
import Explore1 from './components/Explore1';
import Our2 from './components/Our2';
import Partners from './components/Partners';
import Algo4 from './components/Algo4';
import Egastus9 from './components/Egastus9';
import FourEmbrella5 from './components/FourEmbrella5';
import Mint6 from './components/Mint6';
import Meet7 from './components/Meet7';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoadMap8 from './components/RoadMap8';
import Roadmap8a from './components/Roadmap8a';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import MyPreloader from './components/MyPreloader';
import BackToTop from './components/BackToTop';

function App() {


   useEffect(() => {
     AOS.init({
       duration: 2000,
       once: true,
     });
   }, []);

  return (

    <div className="bg_black">
      <MyPreloader />  
      <BackToTop/>
      <CyberNav />
      <Explore1/>
      <Our2/>
      <Partners/>
      <Algo4/>
      <FourEmbrella5/>
      <Mint6/> 
      <Meet7/>
      <RoadMap8/>
      {/* <Roadmap8a/> */}
      <Egastus9 />
      <Footer/>
    </div>
  );
}

export default App;
