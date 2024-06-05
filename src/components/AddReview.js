import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddReview() {
  const [product_id, setProductId] = useState('');
  const [user_id, setUserId] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://c987b0d3-c1fa-4e80-a632-6bb3fea5365b.mock.pstmn.io', { product_id, user_id, rating, comment })
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error creating the review!', error);
      });
  };

  return (
    <div>
      <h1>Add Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input type="number" value={product_id} onChange={e => setProductId(e.target.value)} required />
        </label>
        <label>
          User ID:
          <input type="number" value={user_id} onChange={e => setUserId(e.target.value)} required />
        </label>
        <label>
          Rating:
          <input type="number" value={rating} onChange={e => setRating(e.target.value)} required />
        </label>
        <label>
          Comment:
          <textarea value={comment} onChange={e => setComment(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReview;
