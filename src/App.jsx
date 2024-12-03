import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4 flex-grow">
        <Routes>
          <Route path="/" element={<Home items={items} setItems={setItems} />} />
          <Route path="/details/:id" element={<Details items={items} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;