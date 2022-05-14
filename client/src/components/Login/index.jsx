import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles.css";
import Logo from "../logo.png"

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
						Sing In
					</button>
				</form>
			</div>
			<div className="login-line">
				<p>Already have an account?</p>
				<Link to="/signup">
					<div type="button" className="login-btn">
						Signup
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Login;
