import React from "react";

class Asidecarrito extends React.Component{
    render(){
        const nPla1 = "Pasta a la Bolognesa";
        const nPla2 = "Pasta a la Veneciana";
        const nPla3 = "Ganso Asado";
        const nPla4 = "Sopa de Res";
        
        var Ppla1 = localStorage.getItem(nPla1);
        var Ppla2 = localStorage.getItem(nPla2);
        var Ppla3 = localStorage.getItem(nPla3);
        var Ppla4 = localStorage.getItem(nPla4);
        
        var Ppla1 = parseInt(Ppla1);
        var Ppla2 = parseInt(Ppla2)
        var Ppla3 = parseInt(Ppla3)
        var Ppla4 = parseInt(Ppla4)
       

        return(
            <div>
                <div class="container">
                    <div class="row">
                        <div class=" col-5"></div>
                        <div class=" col-3 border">
                            <br/>
                            <div>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                    Resumen De Compra
                                </button>
                  
                                <div class="modal fade" id="myModal">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title">Productos seleccionados</h4>
                                                    <button type="button" class="close" data-dismiss="modal">×</button>
                                            </div>
                                            <div class="modal-body">
                                                <table width="350px" border="1px">
                                                    <tr>
                                                        <td>{nPla1}</td>
                                                        <td>{Ppla1} unidades {Ppla1*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla2}</td>
                                                        <td>{Ppla2}  unidades {Ppla2*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla3}</td>
                                                        <td>{Ppla3}  unidades {Ppla3*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla4}</td>
                                                        <td>{Ppla4}  unidades {Ppla4*25000} pesos</td>
                                                    </tr>
                                                    

                                                </table>
                                            </div>
                                            <div class="modal-footer">
                                                <h5>Total pedido</h5>
                                                {(Ppla1+Ppla2+Ppla3+Ppla4)*25000}
                                                <h5>$</h5>
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                            </div>
                          
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                </div>
        );
    }
}
export default Asidecarrito;