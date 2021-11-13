import React from "react";

class Asidecarrito extends React.Component{
    render(){
        const nPla1 = "Wiener schnitzel";
        const nPla2 = "Asado de cerdo";
        const nPla3 = "Kartoffelsalat";
        const nPla4 = "Backhendlt";
        const nPla5 = "Frittatensuppeto";
        const nPla6 = "Gulash estilo austríaco";
        const nPla7 = "Semmelknödelt";
        const nPla8 = "Tafelspitz";
        const nPla9 = "Brettljause";
        const nPla10 = "Vanillekipferl";
        const nPla11 = "Powidl";
        const nPla12 = "Krautfleckerlo";
        var Ppla1 = localStorage.getItem(nPla1);
        var Ppla2 = localStorage.getItem(nPla2);
        var Ppla3 = localStorage.getItem(nPla3);
        var Ppla4 = localStorage.getItem(nPla4);
        var Ppla5 = localStorage.getItem(nPla5);
        var Ppla6 = localStorage.getItem(nPla6);
        var Ppla7 = localStorage.getItem(nPla7);
        var Ppla8 = localStorage.getItem(nPla8);
        var Ppla9 = localStorage.getItem(nPla9);
        var Ppla10 = localStorage.getItem(nPla10);
        var Ppla11 = localStorage.getItem(nPla11);
        var Ppla12 = localStorage.getItem(nPla12); 
        var Ppla1 = parseInt(Ppla1);
        var Ppla2 = parseInt(Ppla2)
        var Ppla3 = parseInt(Ppla3)
        var Ppla4 = parseInt(Ppla4)
        var Ppla5 = parseInt(Ppla5)
        var Ppla6 = parseInt(Ppla6)
        var Ppla7 = parseInt(Ppla7)
        var Ppla8 = parseInt(Ppla8)
        var Ppla9 = parseInt(Ppla9)
        var Ppla10 = parseInt(Ppla10)
        var Ppla11 = parseInt(Ppla11)
        var Ppla12 = parseInt(Ppla12)

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
                                                    <tr>
                                                        <td>{nPla5}</td>
                                                        <td>{Ppla5}  unidades {Ppla5*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla6}</td>
                                                        <td>{Ppla6}  unidades {Ppla6*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla7}</td>
                                                        <td>{Ppla7}  unidades {Ppla7*25000} pesos </td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla8}</td>
                                                        <td>{Ppla8}  unidades {Ppla8*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla9}</td>
                                                        <td>{Ppla9}  unidades {Ppla9*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla10}</td>
                                                        <td>{Ppla10 }  unidades {Ppla10*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla11}</td>
                                                        <td>{Ppla11 }  unidades {Ppla11*25000} pesos</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{nPla12}</td>
                                                        <td>{Ppla12} unidades {Ppla12*25000} pesos</td>
                                                    </tr>

                                                </table>
                                            </div>
                                            <div class="modal-footer">
                                                <h5>Total pedido</h5>
                                                {(Ppla1+Ppla2+Ppla3+Ppla4+Ppla5+Ppla6+Ppla7+Ppla8+Ppla9+Ppla10+Ppla11+Ppla12)*25000}
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