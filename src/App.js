import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import PackageSelection from './PackageSelection';
import Payment from './Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Registration} />
        <Route path="/packages" component={PackageSelection} />
        <Route path="/payment" component={Payment} />
      </Routes>
    </Router>
  );
}

export default App;
