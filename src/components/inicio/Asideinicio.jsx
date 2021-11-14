import React from "react";
import imagen1 from '../../img/pasta-g825b3f706_1920.jpg'
import imagen2 from '../../img/personal1.2.jfif'
import imagen3 from '../../img/personal1.3.jfif'
import imagen4 from '../../img/personal1.4.jfif'


const Asideinicio = () =>{
  return(
    <div class="container">
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={imagen1} alt="Los Angeles" width="1250" height="200"></img>
                    <div class="carousel-caption">
                        <div class="row">
                            <div class="col-3">
                                <img src={imagen2} width="100px" class="rounded-circle"></img>
                            </div>
                                <div class="col-9">
                                    <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio? Illum cupiditate impedit eius sed sit expedita inventore, minus pariatur quisquam illo recusandae dicta, tenetur, omnis cumque iure totam animi?</p>
                                </div>
                        </div>
                    </div>   
                </div>
                    <div class="carousel-item">
                        <img src={imagen1} alt="Chicago" width="1250" height="200"></img>
                        <div class="carousel-caption">
                            <div class="row">
                                <div class="col-3">
                                    <img src={imagen3} width="100px" class="rounded-circle"></img>
                                </div>
                                <div class="col-9">
                                    <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio? Illum cupiditate impedit eius sed sit expedita inventore, minus pariatur quisquam illo recusandae dicta, tenetur, omnis cumque iure totam animi?</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                        <div class="carousel-item">
                            <img src={imagen1} alt="New York" width="1250" height="200"></img>
                            <div class="carousel-caption">
                                <div class="row">
                                    <div class="col-3">
                                        <img src={imagen4} width="100px" class="rounded-circle"></img>
                                    </div>
                                    <div class="col-9">
                                        <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio? Illum cupiditate impedit eius sed sit expedita inventore, minus pariatur quisquam illo recusandae dicta, tenetur, omnis cumque iure totam animi?</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
        </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
    </div>
                  
</div>
              
  )}
export default Asideinicio;