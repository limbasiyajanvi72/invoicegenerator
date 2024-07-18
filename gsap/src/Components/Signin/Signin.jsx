import React, { useState } from "react";
import {
	Box,
	createTheme,
	CssBaseline,
	TextField,
	ThemeProvider,
	withStyles,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signin() {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		email: "",
		emailError: "",
		password: "",
		passwordError: "",
	});
	const [btnActive, setBtnActive] = useState(true);
	const [emailValid, setEmailValid] = useState(false);
	const [passValid, setPassValid] = useState(false);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleEmailChange = (e) => {
		e.preventDefault();
		setInput({ ...input, email: e.target.value });

		if (!emailRegex.test(input.email)) {
			setInput((prevState) => ({
				...prevState,
				emailError: "Email is invalid",
			}));
		} else {
			setInput((prevState) => ({
				...prevState,
				emailError: "",
			}));
			setEmailValid(true);
		}
		if (emailValid && passValid) {
			setBtnActive(false);
		}
	};

	const handlePasswordChange = (e) => {
		e.preventDefault();
		setInput({ ...input, password: e.target.value });

		if (input.password.length < 8) {
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
				setPassValid(true);
			}
		}

		if (emailValid && passValid) {
			setBtnActive(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate("/dashboard");
	};

	return (
		<div className='outer-container'>
			<div className='siginin-container '>
				<div className='logo-container'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='48'
						height='48'
						viewBox='0 0 35 35'
						fill='none'
					>
						<path
							d='M16 6.75556V0L1.02839 14.6389C0.462304 15.1924 0.457197 16.1016 1.01703 16.6615L3.55556 19.2'
							fill='#2196F3'
						/>
						<path
							d='M16 6.75556V0L30.9716 14.6389C31.5377 15.1924 31.5428 16.1016 30.983 16.6615L28.4444 19.2'
							fill='#1878C6'
						/>
						<path
							d='M3.55556 19.2L9.6 13.1556H16V19.2'
							fill='#1565C0'
						/>
						<path
							d='M28.4444 19.2L22.4 13.1556H16V19.2'
							fill='#10519D'
						/>
						<path
							d='M16 25.9556H9.95555L12.9778 22.7556L16 25.9556Z'
							fill='#1565C0'
						/>
						<path
							d='M16 32L22.0444 25.9556L16 25.9556V32Z'
							fill='#1878C6'
						/>
						<path
							d='M16 32L9.95555 25.9556H16V32Z'
							fill='#2196F3'
						/>
						<path
							d='M16 25.9556H22.0444L19.0222 22.7556L16 25.9556Z'
							fill='#10519D'
						/>
						<path
							d='M7.72363 21.7502C7.18605 22.3085 7.19441 23.1944 7.74243 23.7424L9.95556 25.9556L16 19.5556V13.1556'
							fill='#2196F3'
						/>
						<path
							d='M24.2764 21.7502C24.814 22.3085 24.8056 23.1944 24.2576 23.7424L22.0444 25.9556L16 19.5556V13.1556'
							fill='#1878C6'
						/>
					</svg>
				</div>
				<div className='heading-container'>
					<p className='heading-style'>Sign in</p>
					<p className='acc-style'>
						Don't have an account?{" "}
						<span onClick={() => navigate("/register")}>
							Sign Up
						</span>
					</p>
				</div>

				<Box
					component='form'
					autoComplete='off'
					className='input-container'
					onSubmit={handleSubmit}
				>
					<TextField
						label='Email *'
						variant='outlined'
						value={input.email}
						onChange={handleEmailChange}
						fullWidth
						margin='normal'
						InputLabelProps={{
							style: {
								fontFamily: '"Brix Sans", sans-serif',
								fontSize: "14px",
								fontWeight: "500",
							},
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								"&.Mui-focused fieldset": {
									borderColor: "#4F46E5",
								},
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: "#4F46E5",
							},
						}}
					/>
					<span>{input.emailError}</span>
					<TextField
						id='outlined-password-input'
						label='Password *'
						type='password'
						autoComplete='current-password'
						value={input.password}
						onChange={handlePasswordChange}
						fullWidth
						margin='normal'
						InputLabelProps={{
							sx: {
								fontSize: "14px",
								fontWeight: "500",
							},
							fontFamily: '"Brix Sans", sans-serif',
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								"&.Mui-focused fieldset": {
									borderColor: "#4F46E5",
								},
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: "#4F46E5",
							},
						}}
					/>
					<span>{input.passwordError}</span>

					<button
						type='submit'
						className='weight-500'
						disabled={btnActive}
					>
						Sign in
					</button>
				</Box>
			</div>
		</div>
	);
}

export default Signin;
