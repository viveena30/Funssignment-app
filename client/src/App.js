import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import './App.css'
import Contact from './components/pages/Contact'
import Quizzes from './components/pages/Quizzes'

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      {user && <Route path="/quizzes" element={<Quizzes />} />}
      {user &&  <Route path="/contact" element={<Contact />} />}
     
      
      {/* <Route path="*" component={<ErrorPage />} /> */}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
