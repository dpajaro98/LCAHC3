import React, {Fragment} from "react";
import imagen1 from '../../img/La cocina de Alicia Logo.png'
import Contadorcompras from './Contadorcompras'



class Plantillacarrito extends React.Component{
    render(props){
        var logica = this.props.identificador
        var logica2= localStorage.getItem(logica);
        var logica2 = parseInt(logica2) 
            return(
                <div>
                    <div className="row">
                        <div className="col-1"></div>
                             <div className="col-5">
                            < h1>{this.props.Nombredeplato}</h1>
                            <img src={this.props.Imagendeplato} alt="Salysalsas" className ="d-block" width="450px"/>
                            <br></br>
                            <br></br>
                            <h3>$25.000     LA UNIDAD</h3>
                            <br></br>
                        </div>
                    <div className="col-4">

                        <br></br>
                        <br></br>
                        <br></br>
                        <h6 className="text-*-center">VERIFICA TU PEDIDO AQUI</h6>
                        <br></br>
                        <br></br>
                        <Contadorcompras Identificadordeplato={logica} valorinicial={logica2}/>
                   
                        <img className="float-left:" src={imagen1} width="250px"></img>
                    </div>
                     <div className="col-2">
                         <br></br>
                         <br></br>
                         <br></br>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, molestias reiciendis unde perspiciatis, aliquam vitae ad totam placeat illum minima dolores, itaque optio odit corporis iste necessitatibus asperiores nemo?</p>
                        </div>
                     </div>
                    </div>
        );
    }
}
 
export default Plantillacarrito;