import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditReview() {
  const { id } = useParams();
  const [review, setReview] = useState({ rating: '', comment: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/reviews/${id}`)
      .then(response => {
        setReview(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the review!', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://c987b0d3-c1fa-4e80-a632-6bb3fea5365b.mock.pstmn.io/${id}`, review)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error updating the review!', error);
      });
  };

  return (
    <div>
      <h1>Edit Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input type="number" value={review.rating} onChange={e => setReview({ ...review, rating: e.target.value })} required />
        </label>
        <label>
          Comment:
          <textarea value={review.comment} onChange={e => setReview({ ...review, comment: e.target.value })} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditReview;
