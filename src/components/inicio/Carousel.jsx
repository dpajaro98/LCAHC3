import React from "react";
import imagen1 from '../../Images/foto1@2x.png'
import imagen2 from '../../Images/foto3@2x.png'
import imagen3 from '../../Images/foto4@2x.jpg'
import logo from '../../Images/logo@2x.png'

const Carousel = () =>{
  return(
    <div className="container">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagen1} alt="Los Angeles" width="1250" height="500"></img>
          <div className="carousel-caption">
          <img src={logo} alt="Los Angeles" height="200"></img>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="Titulodecarrusel">¡SABORES QUE EXALTAN TUS SENTIDOS!</h2>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </div>   
        </div>
      <div className="carousel-item">
        <img src={imagen2} alt="Chicago" width="1250" height="500"></img>
        <div className="carousel-caption">
        <img src={logo} alt="Los Angeles" height="200"></img>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="Titulodecarrusel">¡SABORES QUE EXALTAN TUS SENTIDOS!</h2>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>   
      </div>
      <div className="carousel-item">
        <img src={imagen3} alt="New York" width="1250" height="500"></img>
        <div className="carousel-caption">
        <img src={logo} alt="Los Angeles" height="200"></img>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="Titulodecarrusel">¡SABORES QUE EXALTAN TUS SENTIDOS!</h2>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>   
      </div>
    </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
  )}
export default Carousel;
