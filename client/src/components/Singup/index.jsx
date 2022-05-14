import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";
import Logo from "../logo.png";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="signup_container">
			<div className="header-container">
				<div className="logo-container">
					<img src={Logo} alt="" />
					<p><span>Fun</span>ssignment</p>
				</div>
			</div>
			<div className="signup_form_container">
				<form className="form_container" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="First Name"
						name="firstName"
						onChange={handleChange}
						value={data.firstName}
						required
						className="input-field"
					/>
					<input
						type="text"
						placeholder="Last Name"
						name="lastName"
						onChange={handleChange}
						value={data.lastName}
						required
						className="input-field"
					/>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleChange}
						value={data.email}
						required
						className="input-field"
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={handleChange}
						value={data.password}
						required
						className="input-field"
					/>
					{error && <div className="error_msg">{error}</div>}
					<button type="submit" className="signup-btn">
						Sing Up
					</button>
				</form>
			</div>
			<div className="login-line">
				<p>Already have an account?</p>
				<Link to="/login">
					<div type="button" className="login-btn">
						Login
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Signup;
