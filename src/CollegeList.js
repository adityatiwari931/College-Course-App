import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CollegeList.css';

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/colleges')
      .then(response => setColleges(response.data))
      .catch(error => console.error('Error fetching colleges:', error));
  }, []);

  return (
    <div>
      <h1>Colleges</h1>
      <ul>
        {colleges.map(college => (
          <li key={college.id}>
            <a href={`/colleges/${college.id}`}>{college.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollegeList;
