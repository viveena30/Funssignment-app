import React from "react";
import hero from "../Assets/hero.jpg";
import logout from "../Assets/logout.png";
import profilePic from "../Assets/profile-pic.png";
import "../../App.css";
import CourseCard from "../Courses/CourseCard";

const Home = () => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  return (
    <>
      <div className="home-hero-container">
        <div className="img-container">
          <img src={hero} alt="" />
        </div>
        <div className="profile-pic-container">
          <img src={profilePic} alt="" />
          <h2>Jevin Mangukiya</h2>
          <p>@jevinxxx</p>
        </div>

        <div className="logout-container" onClick={null}>
          <img src={logout} alt="" />
          <p  onClick={handleLogout} >Log out</p>
        </div>

      </div>

      <div className="courses-container">
        <h3>Newly launched courses</h3>
        <div className="purchased-courses-container courses-list">
          <CourseCard title={'premium'} target_students={"JEE"} ques_set_no={"11"} price={"50"} />
          <CourseCard title={'premium'} target_students={"JEE"} ques_set_no={"11"} price={"50"} />
          <CourseCard title={'premium'} target_students={"JEE"} ques_set_no={"11"} price={"50"} />
          <CourseCard title={'premium'} target_students={"JEE"} ques_set_no={"11"} price={"50"} />
        
        </div>
        <h3>Your courses</h3>
        <div className="purchased-courses-container courses-list">
          <CourseCard title={'premium'} target_students={"JEE"} ques_set_no={"11"} price={"50"} />
          <CourseCard title={'premium'} target_students={"JEE"} ques_set_no={"11"} price={"50"} />
          <CourseCard title={'premium'} target_students={"JEE"} ques_set_no={"11"} price={"50"} />
          <CourseCard title={'premium'} target_students={"JEE"} ques_set_no={"11"} price={"50"} />
        
        </div>
      </div>
    </>
  );
};

export default Home;
