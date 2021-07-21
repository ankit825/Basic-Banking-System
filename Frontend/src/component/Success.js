import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';

import image from './Image/payment-success.png';

const Success = () => {
  const location = useLocation();

  const BootstrapButton = withStyles({
    root: {
      marginTop: '40px',

      boxShadow: 'none',
      textTransform: 'none',

      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: 'green',
      borderColor: '##00cc69',

      fontSize: '20px',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#00cc699',
        borderColor: '#00cc69',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#00cc69',
        borderColor: '#00cc69',
      },
      '&:focus': {
        boxShadow: 'green',
      },
    },
  })(Button);
  return (
    <div
      className="d-flex justify-content"
      style={{ justifyContent: 'center' }}
    >
      <div
        style={{
          top: '205px',
          position: 'absolute',
        }}
      >
        <img src={image} alt="Success" />
      </div>
      <div
        style={{
          top: '420px',
          position: 'absolute',
        }}
      >
        <p>
          <b>
            Payment of {location.state.sent}₹ to {location.state.name}{' '}
            Successful
          </b>
        </p>
      </div>
      <div
        style={{
          top: '420px',
          position: 'absolute',
        }}
      >
        <Link to="/History" style={{ padding: '5px' }}>
          <BootstrapButton
            variant="contained"
            color="primary"
            size="large"
            className="btn btn-outline-dark transferMoney shine in-down"
          >
            <b>History</b>
          </BootstrapButton>
        </Link>
        <Link to="/Customerlist">
          <BootstrapButton
            variant="contained"
            color="primary"
            size="large"
            className="btn btn-outline-dark transferMoney shine in-down"
          >
            <b>Users</b>
          </BootstrapButton>
        </Link>
      </div>
    </div>
  );
};

export default Success;
