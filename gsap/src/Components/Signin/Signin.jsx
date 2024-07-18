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
import { validateEmail, validatePassword } from "../../utils/AuthForm";
import AuthForm from "../AuthForm";

function Signin() {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		email: "",
		emailError: "",
		password: "",
		passwordError: "",
	});

	const [valid, setValid] = useState({
		email: false,
		password: false,
		button: true,
	});

	const handleEmailChange = (e) => {
		e.preventDefault();

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
			// setEmailValid(true);
		}
		buttonValidation();
	};

	const handlePasswordChange = (e) => {
		e.preventDefault();
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
			// setPassValid(true);
			setValid((prevState) => ({ ...prevState, password: true }));
		}
		buttonValidation();
	};

	function buttonValidation() {
		if (valid.email && valid.password) {
			setValid((prevState) => ({ ...prevState, button: false }));
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/dashboard");
	};

	return (
		<>
			<AuthForm
				heading='Sign in'
				link='Sign Up'
				email={input.email}
				password={input.password}
				emailError={input.emailError}
				passwordError={input.passwordError}
				button='Sign in'
				buttonValid={valid.button}
				handleEmailChange={handleEmailChange}
				handlePasswordChange={handlePasswordChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}

export default Signin;
