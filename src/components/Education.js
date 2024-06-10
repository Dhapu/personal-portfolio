import React from 'react';
//import './Education.css'; // Import the CSS file if you have one

export const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Govt. Engineering College, Ajmer, Rajasthan</h3>
          <p>B.Tech (Computer Science Engineering) - 8.58 CGPA</p>
          <p>2019 - 2023</p>
        </div>
        <div className="education-item">
          <h3>Agarwal JD Girls Sr. Sec. School, Jodhpur, Rajasthan</h3>
          <p>High School (12th) - 93.80%</p>
          <p>2017 - 2018</p>
        </div>
        {/* Add more education items as needed */}
      </div>
    </section>
  );
};
