import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import {
	validateEmail,
	validateName,
	validatePassword,
} from "../../utils/AuthForm";
import GlobalSvg from "../../assets/Icons/GlobalSvg";

function SignUp() {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		email: "",
		emailError: "",
		password: "",
		passwordError: "",
		name: "",
		nameError: "",
	});

	const [valid, setValid] = useState({
		email: true,
		password: true,
		name: true,
		button: true,
	});

	const handleEmailChange = (e) => {
		e.preventDefault();
		setValid({ ...valid, email: false });
		setInput({ ...input, email: e.target.value });

		let isEmailValid = validateEmail(input.email);
		if (isEmailValid != "") {
			setInput((prevState) => ({
				...prevState,
				emailError: "Email is Invalid",
			}));
		} else {
			setInput((prevState) => ({
				...prevState,
				emailError: "",
			}));
			setValid((prevState) => ({ ...prevState, email: true }));
		}
		buttonValidation();
	};

	const handlePasswordChange = (e) => {
		e.preventDefault();
		setValid({ ...valid, password: false });
		setInput({ ...input, password: e.target.value });
		let isPassValid = validatePassword(input.password);
		if (isPassValid != "") {
			setInput((prevState) => ({
				...prevState,
				passwordError: isPassValid,
			}));
		} else {
			setInput((prevState) => ({
				...prevState,
				passwordError: "",
			}));
			setValid((prevState) => ({ ...prevState, password: true }));
		}
		buttonValidation();
	};

	const handleNameChange = (e) => {
		e.preventDefault();
		setValid({ ...valid, name: false });
		setInput({ ...input, name: e.target.value });
		let isNameValid = validateName(input.name);
		if (isNameValid != "") {
			setInput((prevState) => ({ ...prevState, nameError: isNameValid }));
		} else {
			setInput((prevState) => ({ ...prevState, nameError: "" }));
			setValid((prevState) => ({ ...prevState, name: true }));
		}
	};

	function buttonValidation() {
		if (valid.email && valid.password && valid.name) {
			setValid((prevState) => ({ ...prevState, button: false }));
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/");
	};
	return (
		<div className='outer-container'>
			<div className='siginin-container '>
				<div className='logo-container'>
					<GlobalSvg />
				</div>
				<div className='heading-container'>
					<p className='heading-style'>Sign up</p>
					<p className='acc-style'>
						Already have an account?
						<span onClick={() => navigate("/")}>Sign in</span>
					</p>
				</div>

				<Box
					component='form'
					autoComplete='off'
					className='input-container'
					onSubmit={handleSubmit}
				>
					<TextField
						label='Name *'
						variant='outlined'
						value={input.name}
						onChange={handleNameChange}
						fullWidth
						margin='normal'
						InputLabelProps={{
							style: {
								fontSize: "14px",
								fontWeight: "500",
							},
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								"&.Mui-focused fieldset": {
									borderColor: valid.name
										? "#4F46E5"
										: "#fb4137",
								},
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: valid.name ? "#4F46E5" : "#fb4137",
							},
						}}
					/>
					<span>{input.nameError}</span>
					<TextField
						label='Email *'
						variant='outlined'
						value={input.email}
						onChange={handleEmailChange}
						fullWidth
						margin='normal'
						InputLabelProps={{
							style: {
								fontSize: "14px",
								fontWeight: "500",
							},
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								"&.Mui-focused fieldset": {
									borderColor: valid.email
										? "#4F46E5"
										: "#fb4137",
								},
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: valid.email ? "#4F46E5" : "#fb4137",
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
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								"&.Mui-focused fieldset": {
									borderColor: valid.password
										? "#4F46E5"
										: "#fb4137",
								},
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: valid.password ? "#4F46E5" : "#fb4137",
							},
						}}
					/>
					<span>{input.passwordError}</span>

					<button
						type='submit'
						className='weight-500'
						disabled={valid.button}
					>
						create your free account
					</button>
				</Box>
			</div>
		</div>
	);
}

export default SignUp;
