import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import imagen1 from '../../Images/logo@2x.png'
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
          Restaurante sal y salsas LTDA.<br/>

          calle 19 n.7-30, Bogota
          
          reserves@salysalsas.com<br/>
          
          31232525321<br/>
          
          copyright2020</p>

        </div>
        <div className="col">
        <p className="centrartexo"><br/><br/>CONTACTOS</p>
        </div>
        <div className="col">
        <p className="centrartexo"><br/><br/>RESERVAS</p>
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
