import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CollegeDetails.css';

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/colleges/${id}`)
      .then(response => setCollege(response.data))
      .catch(error => console.error('Error fetching college details:', error));
  }, [id]);

  if (!college) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{college.name}</h1>
      <p>Course Name: {college.courseName}</p>
      <p>Course Duration: {college.duration}</p>
      <p>Accommodation: {college.accommodation}</p>
      <p>Accommodation Fee: {college.accommodationFee}</p>
      <p>Course Fee: {college.courseFee?.courseFee}</p>
    </div>
  );
}

export default CollegeDetails;
