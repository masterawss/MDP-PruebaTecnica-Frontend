import './App.css';

import { Routes, Route } from "react-router-dom";
import { AppLayout } from './layouts/AppLayout';
import { Index } from './pages/cliente/Index';
import { Dashboard } from './pages/cliente/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Index />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
