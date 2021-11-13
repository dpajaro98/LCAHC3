import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
  

class Localstoragecarrito extends React.Component{

    
    render(props){
        var nombredeplato = this.props.Identificadordeplato
        var identificador = 0
        

        function guardar(llave){    
            var saber = document.getElementById(nombredeplato).value;
            localStorage.setItem(nombredeplato, saber);
            alert("Se ha axtualizado el carrito " ,);
            window.location.reload(true);
            
                   }   
                   
        return(

            <div>
                <Link to='/Carrito'>
                <button className="btn btn-success" onClick={() => {guardar({identificador})}} >Actualizar</button>
                </Link>
            </div>
        );
    }
}
export default Localstoragecarrito;