import React, { useState } from "react";
import "./Signin.css";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signin() {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		email: "",
		emailError: "",
		password: "",
		passwordError: "",
	});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleEmailChange = (e) => {
		setInput({ ...input, email: e.target.value });
	};

	const handlePasswordChange = (e) => {
		setInput({ ...input, password: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = true;

		if (!emailRegex.test(input.email)) {
			isValid = false;
			setInput((prevState) => ({
				...prevState,
				emailError: "Email is invalid",
			}));
		} else {
			setInput((prevState) => ({
				...prevState,
				emailError: "",
			}));
		}

		if (input.password.length < 8) {
			isValid = false;
			setInput((prevState) => ({
				...prevState,
				passwordError: "Password should be at least 8 characters long",
			}));
		} else {
			const passwordRegex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.^#])[A-Za-z\d@$!%*?&.^#]{8,15}$/;
			if (!passwordRegex.test(input.password)) {
				isValid = false;
				setInput((prevState) => ({
					...prevState,
					passwordError:
						"Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
				}));
			} else {
				setInput((prevState) => ({
					...prevState,
					passwordError: "",
				}));
			}
		}

		if (isValid) {
			alert("Form submitted successfully!");
			navigate("/dashboard");
		}
	};

	return (
		<div className='outer-container'>
			<div className='siginin-container '>
				<h1 className='heading-style'>Sign in</h1>
				<p>
					Don't have an account?{" "}
					<span
						className='signup-style'
						onClick={() => navigate("/register")}
					>
						Sign Up
					</span>
				</p>
				<Box
					component='form'
					autoComplete='off'
					className='input-container'
					onSubmit={handleSubmit}
				>
					<TextField
						label='Email'
						variant='outlined'
						value={input.email}
						onChange={handleEmailChange}
						fullWidth
						margin='normal'
					/>
					<span className='error-style'>{input.emailError}</span>
					<TextField
						id='outlined-password-input'
						label='Password'
						type='password'
						autoComplete='current-password'
						value={input.password}
						onChange={handlePasswordChange}
						fullWidth
						margin='normal'
					/>
					<span className='error-style'>{input.passwordError}</span>
					<button type='submit' className='btn-style'>
						Sign In
					</button>
				</Box>
			</div>
		</div>
	);
}

export default Signin;
