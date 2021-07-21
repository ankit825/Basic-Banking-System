import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Table.css';

const Tablelist = () => {
  const [customers, setcustomers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/customers`).then(res => {
      const persons = res.data;
      setcustomers(persons);
    });
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ left: '39%', position: 'absolute' }}>
        <h1 className="m-2">
          <b>Customers List</b>
        </h1>
      </div>
      <div className="trans" style={{ padding: '100px' }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Current Balance</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>₹ {user.balance}</td>
                <td>
                  <Link
                    to={{
                      pathname: '/TransferMoney',
                      state: { id: user.id },
                    }}
                    className="btn"
                    style={{ color: 'white', border: '1px solid grey' }}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tablelist;
