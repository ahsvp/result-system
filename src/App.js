import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Graph from './Graph';
import Result from './Result';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState([
    { name: 'group-A', value: 10 },
    { name: 'group-B', value: 20 },
    { name: 'group-C', value: 15 },
    { name: 'group-D', value: 25 }
  ]);
  const [results, setResults] = useState([]);

  // Use localStorage to persist the login state
  useEffect(() => {
    const storedAdminStatus = localStorage.getItem('isAdmin');
    if (storedAdminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAdmin', 'true');
    setIsAdmin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  // Directly pass setData and setResults as props
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <Graph data={data} />
              <button
                className="results-btn"
                onClick={() => window.location.href = '/results'}
              >
                View Results
              </button>
            </div>
          }
        />
        
        <Route
          path="/admin"
          element={isAdmin ? (
            <AdminPage 
              data={data} 
              setData={setData}  // Directly pass setData 
              setResults={setResults}  // Directly pass setResults
              handleLogout={handleLogout} 
            />
          ) : (
            <AdminLogin setIsAdmin={handleLogin} />
          )}
        />

        <Route
          path="/results"
          element={<Result results={results} />}
        />
      </Routes>
    </Router>
  );
}

export default App;