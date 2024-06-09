import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PackageSelection() {
  const [packages, setPackages] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get('https://tron254-backend-5d548a883f2f.herokuapp.com/packages')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('Error fetching packages:', error);
      });
  }, []);

  const selectPackage = (pkg) => {
    // Save selected package to backend or state
    Navigate.push({
      pathname: '/payment',
      state: { selectedPackage: pkg }
    });
  };

  return (
    <div>
      <h1>Select Package</h1>
      {packages.map((pkg, index) => (
        <div key={index}>
          <span>{pkg.price} Ksh for {pkg.duration}</span>
          <button onClick={() => selectPackage(pkg)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default PackageSelection;
