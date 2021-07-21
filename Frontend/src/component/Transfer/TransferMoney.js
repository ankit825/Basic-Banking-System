import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import background from '../Image/Money-transfer.jpg';
import image from '../Image/72-729756_how-to-add-a-new-user-to-your.png';

const TransferMoney = () => {
  const [inputLinkClicked, setinputLinkClicked] = useState(false);
  const [isUserSelected, setisUserSelected] = useState(false);
  const [isMore, setisMore] = useState(false);
  const [isdisable, setisdisable] = useState(true);
  const [amount, setamount] = useState(null);
  const [customers, setcustomers] = useState([]);
  const [UserSelectedID, setUserSelectedID] = useState(null);
  const [UserSelected, setUserSelected] = useState('');
  const [UserName, setUserName] = useState('');

  const location = useLocation();
  const [customer, setcustomer] = useState(location.state.id);
  const [customerBalance, setcustomerBalance] = useState(null);
  console.log(customer);
  console.log(location.state);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/customers`).then(res => {
      const persons = res.data;
      setcustomers(persons);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/customer/${location.state.id}`)
      .then(res => {
        const persons = res.data;
        setcustomer(persons);
        setcustomerBalance(persons.balance);
      });
  }, []);
  const onhandlechange = () => {
    setinputLinkClicked(true);
  };
  const onhandleclick = e => {
    setisUserSelected(true);
    setUserSelectedID(e.target.value);
    console.log(UserSelectedID);
  };

  const onchangeAmount = e => {
    setamount(e.target.value);
    setisMore(false);
    console.log(e.target.value);

    if (e.target.value.length === 0) {
      setisdisable(true);
    } else {
      setisdisable(false);
    }
    if (customerBalance < e.target.value) {
      setisMore(true);
      setisdisable(true);
    }
    if (e.target.value <= 0) {
      setisdisable(true);
    }
    axios
      .get(`http://localhost:3001/api/customer/${UserSelectedID}`)
      .then(res => {
        const persons = res.data;
        console.log('persons.balance');
        console.log(persons.balance);
        setUserSelected(res.data.balance);
        setUserName(res.data.name);
      });
  };

  const onProceed = () => {
    const CusBalance = Number(customerBalance) - Number(amount);
    const userBalance = Number(UserSelected) + Number(amount);
    console.log(userBalance);
    console.log(UserSelected);
    const cusID = Number(customer.id);
    const userID = Number(UserSelectedID);
    const params = JSON.stringify({
      id: cusID,
      balance: CusBalance,
    });
    try {
      axios({
        method: 'put',
        url: 'http://localhost:3001/api/customer',
        data: params,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
          console.log(response.headers);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    } catch (error) {
      console.log(error.response.data);
    }
    const params1 = JSON.stringify({
      id: userID,
      balance: userBalance,
    });
    try {
      axios({
        method: 'put',
        url: 'http://localhost:3001/api/customer',
        data: params1,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
          console.log(response.headers);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    } catch (error) {
      console.log(error.response.data);
    }
    const values = JSON.stringify({
      sender_id: customer.id,
      sender_name: customer.name,
      receiver_id: UserSelectedID,
      receiver_name: UserName,
      amount,
      status: 'Success',
    });
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/history',
      data: values,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(function (response) {
      console.log(response);
    });

    console.log(values);
  };
  function sameUser(id) {
    if (location.state.id === id) {
      return true;
    }

    return false;
  }
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
      borderRadius: '50px',
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
  const useStyles = makeStyles(() => ({
    input: {
      color: 'white',
    },
    root: {
      icon: {
        fill: 'white',
      },
    },
    select: {
      icon: {
        fill: 'white',
      },
    },
  }));
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '700px',
      }}
    >
      <div
        className="row"
        style={{
          width: '50%',
          height: '220px',
          top: '50%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-40%,  -110%)',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="col-4"
          style={{
            display: 'flex',
          }}
        >
          <img
            src={image}
            alt="img"
            style={{ height: '150px', borderRadius: '100px' }}
          />
        </div>
        <div className="col-8" style={{}}>
          <div className="p-2">
            <h3 style={{ color: 'white' }}>{customer.name}</h3>
          </div>
          <div className="p-2">
            <h3 style={{ color: 'white' }}>User ID : {location.state.id}</h3>
          </div>
          <div className="p-2">
            <h3 style={{ color: 'white' }}>Email : {customer.email}</h3>
          </div>
          <div className="p-2">
            <h3 style={{ color: 'white' }}>
              Account Balance : {customer.balance}{' '}
            </h3>
          </div>
          <div>
            <BootstrapButton
              variant="contained"
              color="primary"
              disableRipple
              size="large"
              className="btn btn-outline-dark transferMoney shine in-down"
              onClick={onhandlechange}
            >
              <b>Transfer Money</b>
            </BootstrapButton>
          </div>
          <div>
            {inputLinkClicked ? (
              <div style={{ marginTop: '50px' }}>
                <FormControl
                  style={{
                    width: '100%',
                  }}
                >
                  <div style={{ color: 'white' }}>Select User</div>
                  <Select
                    labelId="demo-simple-select-readonly-label"
                    className={classes.selectEmpty}
                    label="Enter Money"
                    inputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.input,
                    }}
                    id="demo-simple-select-readonly"
                    displayEmpty
                    onClick={onhandleclick}
                    style={{
                      width: '100%',
                      paddingLeft: '10px',
                      color: 'white',
                    }}
                  >
                    {customers.map(user => (
                      <MenuItem value={user.id} disabled={sameUser(user.id)}>
                        {user.name} (User ID {user.id})
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ) : (
              <div />
            )}
          </div>
          <div>
            {isUserSelected ? (
              <div style={{ marginTop: '50px' }}>
                <FormControl
                  style={{
                    width: '100%',
                    color: 'white',
                  }}
                >
                  <TextField
                    className={classes.root}
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.input,
                    }}
                    id="filled-search"
                    label="Enter Money"
                    type="number"
                    variant="standard"
                    onChange={onchangeAmount}
                  />
                  {isMore ? <small>Insuffiecient Balance</small> : null}
                </FormControl>
                <div>
                  <Link
                    to={{
                      pathname: '/Success',
                      state: { name: UserName, sent: amount },
                    }}
                  >
                    <BootstrapButton
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isdisable}
                      className="btn btn-outline-dark transferMoney shine in-down"
                      onClick={onProceed}
                    >
                      <b>Proceed</b>
                    </BootstrapButton>
                  </Link>
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferMoney;
