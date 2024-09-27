import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeList from './CollegeList';
import CollegeDetails from './CollegeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollegeList />} />
        <Route path="/colleges/:id" element={<CollegeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
