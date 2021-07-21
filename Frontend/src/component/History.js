import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const History = () => {
  const [history, sethistory] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/histories`).then(res => {
      const persons = res.data;
      sethistory(persons);
    });
  }, []);

  return (
    <div>
      <div style={{ left: '39%', position: 'absolute' }}>
        <h1 className="m-2">
          <b>Transactions History</b>
        </h1>
      </div>
      <div className="trans" style={{ padding: '100px' }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col" className="disp">
                Sender ID
              </th>
              <th scope="col" className="disp">
                Sender
              </th>
              <th scope="col" className="disp">
                Recipient ID
              </th>
              <th scope="col" className="disp">
                Recipient
              </th>
              <th scope="col" className="disp">
                Amount
              </th>
              <th scope="col" className="disp">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {history
              .slice(0)
              .reverse()
              .map(tran => (
                <tr>
                  <th>{tran.sender_id}</th>
                  <th>{tran.sender_name}</th>
                  <th>{tran.receiver_id}</th>
                  <th>{tran.receiver_name}</th>
                  <th>₹ {tran.amount}</th>
                  <th>{tran.status}</th>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default History;
