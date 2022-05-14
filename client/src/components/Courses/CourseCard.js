import React from "react";
import '../../App.css'
import blob from '../Assets/blob.png'

const CourseCard = ({ title, target_students, ques_set_no, price }) => {
  return (
    <>
      <div className="course-card-container">
        <div className="course-info-container">
          <h2>{title}</h2>
          <h4>plan includes : </h4>
          <p>for {target_students} students</p>
          <p>Contains {ques_set_no} Question sets</p>
        </div>
        <div className="course-price-container">
            <img src={blob} alt="" />
            <p>${price}</p>
        </div>
        <button>Start 14 days free plan</button>
      </div>
      
    </>
  );
};

export default CourseCard;
