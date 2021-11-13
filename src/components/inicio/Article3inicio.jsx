import React from "react";
import imagen1 from '../../Images/foto3@2x.png'
import imagen2 from '../../Images/icono1@2x.png'
import imagen3 from '../../Images/icono2@2x.png'
import imagen4 from '../../Images/icono3@2x.png'
import imagen5 from '../../Images/icono4@2x.png'


const Article3inicio = () =>{
  return(
    <div className="container">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={imagen1} alt="Los Angeles" width="1250" height="500"></img> 
                    <div className="carousel-caption">
                        <div className="row">
                          <div className="row">
                            <div className="col-12"><h2 className="TituloArticuloinicio3">Celebra tus fiestas con nosotros</h2>
                                <br></br>
                                <br></br>
                                <br></br>
                                
                            </div>
                            <div className="col-3">
                                <img src={imagen2} width="110px"></img>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias doloribus mollitia similique minus ipsam? </p>
                                
                            </div>
                            <div className="col-3">
                                <img src={imagen3}width="110px"></img>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias doloribus mollitia similique minus ipsam? </p>
                                
                            </div>
                            <div className="col-3">
                                <img src={imagen4} width="120px"></img>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias doloribus mollitia similique minus ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sed repellendus    </p>
                                
                            </div>
                            <div className="col-3">
                                <img src={imagen5}width="120px"></img>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias doloribus mollitia similique minus ipsam? </p>
                                
                            </div>
                        
                        </div>
                    </div>
                </div>   
            </div>
                   
        </div>
    </div>    
  )}
export default Article3inicio;
