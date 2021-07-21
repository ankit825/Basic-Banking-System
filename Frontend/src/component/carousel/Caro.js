import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Image/Recognize-Market-Cycles.jpeg';
import image2 from '../Image/banking-go-to-bank-golden-columns-coins-green-background-magnifying-glass-chess-books-copy-space-65663042.jpg';
import image3 from '../Image/179316148.jpg';
import './Caro.css';

const Caro = () => {
  return (
    <Carousel controls={false} style={{ height: '500Px' }} className="carousel">
      <Carousel.Item interval={2000} style={{ width: '100%' }}>
        <img className=" img-fluid" src={image1} alt="First slide" style={{}} />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="img-fluid" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="img-fluid" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Caro;
