import React from 'react';

class Pictures extends React.Component {
  
  render() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="hero-image" style={{ objectPosition: "50% -100%" }} src="http://zanshinmkd.com/wp-content/uploads/2012/03/karate-moves.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img className="hero-image" style={{ objectPosition: "50% -50%" }} src="https://www.wikihow.com/images/7/77/Block-Punches-in-Karate-Step-13.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img className="hero-image" style={{ objectPosition: "50% -50%" }} src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QZ31Q49skztB21jz8lhfowHaEY%26pid%3DApi&f=1" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Pictures;