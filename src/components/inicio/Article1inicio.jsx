import React from "react";
import imagen1 from '../../img/people-2557408_1280.jpg'


const Article1inicio = () =>{
  return(
    <div className="container">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
        </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagen1} alt="Los Angeles" width="1250" height="500"></img>
          <div className="carousel-caption">
          <h2 className="tituloarticle1">Nuestra Propuesta</h2>
          <br></br>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo odio totam nihil tempora sint nobis ullam aliquam officiis, ipsam, tempore voluptatem nulla ducimus ea aperiam hic reprehenderit earum aspernatur quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt suscipit vel libero a necessitatibus laborum molestiae excepturi dolores dignissimos nulla! Nostrum beatae veniam laboriosam dolorem nemo mollitia pariatur distinctio perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure architecto eaque similique accusantium beatae earum doloremque iste suscipit distinctio nihil voluptates veniam nostrum dolores, nobis aspernatur, ducimus laudantium natus?</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </div>   
        </div>
      </div>
    </div>
  </div>
  )}
export default Article1inicio;
