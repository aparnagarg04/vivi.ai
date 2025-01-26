import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatWindow from './components/ChatWindow';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat/:character" element={<ChatWindow />} />
      </Routes>
    </Router>
  );
};

export default App;