import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Header from './Components/Navbar';
import Expirence from './Components/Expirence';
import Footer from './Components/Footer';
import Stories from './Components/Stories';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Expirence />
      <Stories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
