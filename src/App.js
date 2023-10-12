import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './shared/dashboard';
import Layout from './shared/layout';
import Products from './shared/products';
import DashboardStatsGrid from './components/dashboardstatsgrid';
function App() {
  return (
      <Routes>
        <Route path="/layout" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/dashboardstatsgrid' element={<DashboardStatsGrid />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Layout />} />
        <Route path="/login" element={<div>This Is Login</div>} />
      </Routes>

  );
  
}

export default App;
