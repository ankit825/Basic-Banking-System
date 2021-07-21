import React from 'react';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import './card.css';

const Card = () => {
  return (
    <div>
      <div className="example example-solid p-3 m-5 hover01">
        <p>
          <a href="#t">
            <img
              src="https://img.icons8.com/ios/50/000000/broker.png"
              alt="icon"
            />
          </a>
          <h6>Account and Deposit</h6>
        </p>
        <p>
          <a href="#t">
            <img
              src="https://img.icons8.com/ios/50/000000/gender-neutral-user.png"
              alt="loan"
            />
          </a>
          <h6>Personal Loan</h6>
        </p>
        <p>
          <a href="#t">
            <img
              src="https://img.icons8.com/ios/48/000000/umbrella.png"
              alt="lo"
              style={{ color: 'blue' }}
            />
          </a>
          <h6>Insurance</h6>
        </p>
        <p>
          <a href="#t">
            <PaymentOutlinedIcon
              style={{ fontSize: 50, textAlign: 'center', color: 'black' }}
            />
          </a>
          <h6>Credit Card</h6>
        </p>
        <p>
          <a href="#t">
            <img
              src="https://img.icons8.com/ios/50/000000/property.png"
              alt="log"
            />
          </a>
          <h6>Mortgage</h6>
        </p>
        <a href="hr">
          <img
            src="https://img.icons8.com/ios-filled/48/000000/sales-performance.png"
            alt="log"
          />
        </a>
        <h6>Investment</h6>
      </div>
    </div>
  );
};

export default Card;
