import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foto1 from "./../../img/f1.jpg";
import foto2 from "./../../img/f2.jpg";
import foto3 from "./../../img/f3.jpg";

function Carousellayout() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={foto1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={foto2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={foto3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousellayout;
