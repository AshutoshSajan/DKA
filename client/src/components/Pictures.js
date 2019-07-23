import React from 'react';

class Pictures extends React.Component {
  
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0" className="active">
          </li>

          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1">
          </li>

          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2">
          </li>

        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="hero-image"
              className="d-block w-100" alt="..."
              style={{ objectPosition: "50% -100%" }}
              src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-9/67142454_2433727803413704_7828418267441004544_n.jpg?_nc_cat=106&_nc_oc=AQlEIK_96SJKit45rM1uA_70zdPVTv8V40Iv4uRS68OijD-FrUzC6jrxm8YCl7QUdk4&_nc_ht=scontent-bom1-2.xx&oh=e000ce493adc05558c5c2e005164b963&oe=5DEE4FCE"
              />
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="hero-image"
              className="d-block w-100"
              style={{ objectPosition: "50% -50%" }}
              src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-9/56480347_2265236436929509_5677992644152655872_n.jpg?_nc_cat=111&_nc_oc=AQkWy1uJfXuFiZlmrkEPNpE9FpG364OZm-uzgoyFIdzPuL7_EQz4cVOgwd9Q3mubZMY&_nc_ht=scontent-bom1-2.xx&oh=6761035288b620b85a80a71b2b68a845&oe=5DAF9196"
              />
          </div>
          <div className="carousel-item">
            <img
              className="hero-image"
              className="d-block w-100"
              style={{ objectPosition: "50% -50%" }}
              src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-9/67059269_2433728033413681_3235424294578159616_n.jpg?_nc_cat=109&_nc_oc=AQm45yzlVmgODkxR83mFKbw5EOGU3D8ZzLAp3EX-Gkbb08IHTmBP0kAqi6vBuFd4e1g&_nc_ht=scontent-bom1-2.xx&oh=d0d1b81bfa2269a79821e1dab691b7be&oe=5DA99BCB"
              alt="..."
              />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            >
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button" data-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            >
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Pictures;