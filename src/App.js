import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Inicio from './Pages/Inicio';
import Equipo from './Pages/Equipo';
import Partidos from './Pages/Partidos';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Inicio />
            </Layout>
          }
        />
        <Route
          path="/Pages/Equipo"
          element={
            <Layout>
              <Equipo />
            </Layout>
          }
        />
        <Route
          path="/Pages/Partidos"
          element={
            <Layout>
              <Partidos />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
