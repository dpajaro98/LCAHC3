import React from "react";
import { Route,Routes} from "react-router-dom";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/css/bootstrap.css";
import Menu from './components/menu/Menu'

import Footer from './components/footer/pie';
import Inicio from './components/inicio/Inicio'

import Carrito from './components/carrito/Carrito';
import Navbarh from "./components/navbarg/navbargral";
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <><div className="App">
      
      
    <Router>
    <Navbarh />
    <div>
      <Routes>
        <Route path="/menu">
          <Menu />
        </Route>
        
          
       
        
        <Route path="/Carrito" >
          <Carrito />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>

      </Routes>
      </div>
      <Footer/>
    </Router>
  </div></>
      

      

    
  );
}

export default App;