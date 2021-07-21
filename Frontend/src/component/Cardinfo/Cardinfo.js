import React from 'react';
import { Card } from 'react-bootstrap';
import image2 from '../Image/stock-photo-man-hand-using-online-banking-and-icon-on-tablet-screen-device-in-coffee-shop-technology-e-1099395086.jpg';
import image from '../Image/63556196-young-woman-working-on-laptop-computer-shopping-using-online-web-service-attractive-female-browsing-.jpg';
import image3 from '../Image/video-Dream11-Architecting-Scale-with-Aerospike-featured-640x360.jpg';
import image4 from '../Image/businessman-touching-icon-online-banking-260nw-1388903636.jpg';

const Cardinfo = () => {
  return (
    <div className="container-fluid">
      <div className="row m-1 p-3">
        <div className="col ">
          <Card style={{ width: '18rem', height: '310px' }}>
            <Card.Img variant="top" src={image4} style={{ height: '150px' }} />

            <Card.Body>
              <Card.Title style={{ height: '40px' }}>
                {' '}
                Save up to Rs 6,000 p.a. with 5% cashback
              </Card.Title>
              <Card.Text style={{ height: '40px' }}>
                On monthly telecom, utility & fuel spends with Titanium credit
                card{' '}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col ">
          <Card style={{ width: '18rem', height: '310px' }}>
            <Card.Img variant="top" src={image2} style={{ height: '150px' }} />
            <Card.Body>
              <Card.Title style={{ height: '40px' }}>NRI Banking</Card.Title>
              <Card.Text style={{ height: '40px' }}>
                {' '}
                Enjoy free international debit card with Priority Pass & Golf
                privileges
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col ">
          <Card style={{ width: '18rem', height: '310px' }}>
            <Card.Img variant="top" src={image3} style={{ height: '150px' }} />
            <Card.Body>
              <Card.Title style={{ height: '40px' }}>
                Money Tactic #2 with Dream11
              </Card.Title>
              <Card.Text style={{ height: '40px' }}>
                Save consistently with SIPs to reach your savings goal{' '}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col ">
          <Card style={{ width: '18rem', height: '310px' }}>
            <Card.Img variant="top" src={image} style={{ height: '150px' }} />
            <Card.Body>
              <Card.Title style={{ height: '40px' }}>
                Get 10% discount on groceries at Flipkart
              </Card.Title>
              <Card.Text style={{ height: '40px' }}>
                Enjoy discount on groceries at Flipkart with your credit and
                debit card
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cardinfo;
