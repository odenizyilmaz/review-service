import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('/https://c987b0d3-c1fa-4e80-a632-6bb3fea5365b.mock.pstmn.io')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <Link to="/add">Add Review</Link>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            {review.comment} - {review.rating} stars
            <Link to={`/edit/${review.id}`}>Edit</Link>
            <button onClick={() => handleDelete(review.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

  function handleDelete(id) {
    axios.delete(`https://c987b0d3-c1fa-4e80-a632-6bb3fea5365b.mock.pstmn.io/${id}`)
      .then(() => {
        setReviews(reviews.filter(review => review.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the review!', error);
      });
  }
}

export default ReviewList;
