import React from "react";
import { Route,Routes,Link} from "react-router-dom";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/css/bootstrap.css";
import {navbarg} from "./components/navbarg/navbarg";
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
      <Router>
          <navbarg/>


      </Router>
      

      

    
  );
}

export default App;