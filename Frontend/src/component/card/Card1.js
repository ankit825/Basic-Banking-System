import React from 'react';
import background from '../Image/in-hp-rewarding-relationship-banner-882x480.jpg';
import background1 from '../Image/in-market-views-on-the-go.jpg';
import './Card1.css';

const Card1 = () => {
  return (
    <div>
      <div className="row  ">
        <div
          className="col"
          style={{
            backgroundImage: `url(${background})`,
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <div className="row m-5">
            <h6
              className="massage"
              style={{ color: 'white', left: '0%', fontFamily: 'serif' }}
            >
              STANDARD CHARTERED PRIORITY BANKING
            </h6>
          </div>
          <div className="row m-5  content">
            <h3 style={{ color: 'white', fontFamily: 'serif' }}>
              Enjoy annual benefits* worth up to ₹1.85
              <br /> Lakhs when you start a Priority Banking
              <br /> relationship
            </h3>
          </div>
          <div
            className="buttons m-6"
            style={{
              left: '50%',
              height: '80px',

              marginTop: '20%',
            }}
          >
            <li>
              <a
                className="btn btn-ghost js--scroll-to-start m-2"
                href="#t"
                target="blank"
              >
                Know More
              </a>
            </li>
          </div>
        </div>

        <div
          className="col"
          style={{
            backgroundImage: `url(${background1})`,
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <div className="row m-5">
            <h6
              className="massage"
              style={{ color: 'white', left: '0%', fontFamily: 'serif' }}
            >
              MARKET VIEWS ON-THE-GO
            </h6>
          </div>
          <div className="row m-5 p-0 content">
            <h3 style={{ color: 'white', fontFamily: 'serif' }}>
              Want to know our views across asset
              <br /> classes?
            </h3>
          </div>
          <div
            className="buttons m-6"
            style={{
              left: '50%',
              height: '80px',

              marginTop: '20%',
            }}
          >
            <li>
              <a
                className="btn btn-ghost js--scroll-to-start m-2"
                href="#t"
                target="blank"
              >
                Find Out More
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
