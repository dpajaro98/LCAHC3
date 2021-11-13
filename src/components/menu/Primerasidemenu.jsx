import React from "react";

class Primerasidemenu extends React.Component{
    render(props){
        return(
            <div className ="container">
                <div className ="row">
                    <div className="col-8">
                    <br></br>
                        <h1 className="Titulodemenu">{this.props.TituloPrimerasidemenu}</h1>
                    </div>
                    <div className="col-3">
                        <br></br>
                        <br></br>
                        <a href="https://menorquina.com/uploads/documents/Ebook%202_%20Elaboracion%20y%20disen%CC%83o%20de%20la%20Carta%20de%20Restaurante_%20Noviembre%202015.pdf" target="_blank">
                        <button className="btn btn-danger">Dercargue el menu aqui</button>
                        </a>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Primerasidemenu;
