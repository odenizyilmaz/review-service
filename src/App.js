import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewList from './components/ReviewList';
import AddReview from './components/AddReview';
import EditReview from './components/EditReview';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/add" element={<AddReview />} />
          <Route path="/edit/:id" element={<EditReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
