import React from "react";
import Quizcard from "../Cards/Quizcard";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const Quizzes = () => {
  return (
    <>
      <Navbar />

<div className="quiz-list-container">

      <Quizcard
        quiz_name={"Quiz Name"}
        quiz_total_ques={"90"}
        quiz_ques_points={"4"}
        quiz_time={"3 hr 00 min"}
        quiz_points={"10"}
        quiz_link={"contact"}
        />
      <Quizcard
        quiz_name={"Quiz Name"}
        quiz_total_ques={"90"}
        quiz_ques_points={"4"}
        quiz_time={"3 hr 00 min"}
        quiz_points={"10"}
        quiz_link={"contact"}
        />
      <Quizcard
        quiz_name={"Quiz Name"}
        quiz_total_ques={"90"}
        quiz_ques_points={"4"}
        quiz_time={"3 hr 00 min"}
        quiz_points={"10"}
        quiz_link={"contact"}
        />
      <Quizcard
        quiz_name={"Quiz Name"}
        quiz_total_ques={"90"}
        quiz_ques_points={"4"}
        quiz_time={"3 hr 00 min"}
        quiz_points={"10"}
        quiz_link={"contact"}
        />
      <Quizcard
        quiz_name={"Quiz Name"}
        quiz_total_ques={"90"}
        quiz_ques_points={"4"}
        quiz_time={"3 hr 00 min"}
        quiz_points={"10"}
        quiz_link={"contact"}
        />
      

        </div>
      <Footer />
    </>
  );
};

export default Quizzes;
