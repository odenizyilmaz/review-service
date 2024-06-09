import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReviewList from './components/ReviewList';
import AddReview from './components/AddReview';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Review</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/add" element={<AddReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
