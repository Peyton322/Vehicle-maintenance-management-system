import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';  // 改為 HashRouter
import App from './App';
import Query from './Query' 
import CarStatus from './CarStatus';
import './index.css';
import CustomerHistory from './CustomerHistory';
import RepairConfirmation from './repairConfirmation';
import EndPage from './endPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>  
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/query" element={<Query />} />
        <Route path="/customer-history/:id" element={<CustomerHistory />} />
        <Route path="/car-status/:plateNumber" element={<CarStatus />} />
        <Route path="/repairConfirmation/:plateNumber" element={<RepairConfirmation />} />
        <Route path="/endPage" element={<EndPage/>} />
      </Routes>
    </HashRouter>  
  </React.StrictMode>
);