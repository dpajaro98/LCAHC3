import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import imagen1 from '../../img/La cocina de Alicia Logo.svg'
import "./foo.css";
class Footer extends React.Component{
    render(){
        return(
  
<>
<footer>
<div className="container-fluid fondo"> 

<div className="row">

<div className="col-3">  <img img  src={imagen1} alt="HTML5 Icon" width="230px" height="240px" ></img>
</div>

<div className="col-2 "> <p className="centrartexo"><br/><br/>MAPA DEl SITIO 
          Restaurante La cocina de Alicia<br/>

          calle 19 n.7-30, Bogota
          
          reserves@lca.com<br/>
          
          2002322203<br/>
          
          copyright2021</p>

        </div>
        <div className="col">
        <p className="centrartexo"><br/><br/>Menu</p>
        </div>
        <div className="col">
        <p className="centrartexo"><br/><br/>inicio</p>
        </div>
        <div className="col">  <img  src={imagen1} alt="HTML5 Icon" width="230px" height="240px" ></img>
</div>
        <div></div>





</div>
</div>
</footer>
</>

        );
    }


}
export default Footer;
