import React from "react";
import time from '../Assets/time.png'
import ques from '../Assets/ques.png'
import stars from '../Assets/stars.png'
import { Button } from "../Buttons/Button";

const Quizcard = ({
  quiz_name,
  quiz_total_ques,
  quiz_ques_points,
  quiz_time,
  quiz_points,
  quiz_link
}) => {
  return (
    <>
      <div className="quiz-card-container">
        <div className="quiz-info">
          <div className="quiz-title">{quiz_name}</div>
          <div className="quiz-details">
            <div className="quiz-ques">
              <img src={ques} alt="" />
              <div className="info-text">
                <div className="title">{quiz_total_ques} Question</div>
                <div className="sub-title">
                  {quiz_ques_points} marks for a correct answer
                </div>
              </div>
            </div>
            <div className="quiz-time">
              <img src={time} alt="" />
              <div className="info-text">
                <div className="title">{quiz_time}</div>
                <div className="sub-title">Total duration of the quiz</div>
              </div>
            </div>
            <div className="quiz-stars">
              <img src={stars} alt="" />
              <div className="info-text">
                <div className="title">Win {quiz_points} star</div>
                <div className="sub-title">Answer all questions correctly</div>
              </div>
            </div>
          </div>
        </div>
        <div className="start-btn">

        <Button buttonSize="btn--medium" buttonStyle="btn--primary" link_path={quiz_link}>
      Start
    </Button>
        </div>
      </div>
    </>
  );
};

export default Quizcard;
