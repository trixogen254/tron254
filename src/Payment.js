import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Payment() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const selectedPackage = location.state?.selectedPackage;

  const initiatePayment = () => {
    axios.post('https://your-backend-url/payment', { username, phoneNumber, package: selectedPackage })
      .then(response => {
        setMessage('Payment initiated. Please check your phone to complete the payment.');
      })
      .catch(error => {
        setMessage('Error initiating payment');
      });
  };

  return (
    <div>
      <h1>Payment</h1>
      <p>Package: {selectedPackage.price} Ksh for {selectedPackage.duration}</p>
      <input 
        type="text" 
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <input 
        type="text" 
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        placeholder="Enter your phone number"
      />
      <button onClick={initiatePayment}>Pay</button>
      <p>{message}</p>
    </div>
  );
}

export default Payment;
