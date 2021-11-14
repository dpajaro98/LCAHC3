import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class Segundoasidemenu extends React.Component{
    render(props){
        return(
            <div className ="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <br></br>
                        <br></br>
                        <Link to="/carrito">  <button className="btn btn-primary btn-block"><img className="img-thumbnail" src={this.props.carrito} alt="carrito"  width="30px"/>    Confirma tu pedido</button></Link>
                    </div>
                    <div className="col-4"></div>
                </div>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Segundoasidemenu;
