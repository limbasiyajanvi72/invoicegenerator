export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email) => {
	let emailError;
	if (!emailRegex.test(email)) {
		emailError = "Email is invalid";
	} else {
		emailError = "";
	}
	return emailError;
};

const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.^#])[A-Za-z\d@$!%*?&.^#]{8,15}$/;

export const validatePassword = (password) => {
	let passwordError = "";

	if (password.length < 8) {
		passwordError = "Password should be at least 8 characters long";
	} else {
		if (!passwordRegex.test(password)) {
			passwordError =
				"Password must include at least one A-Z, a-z, 0-9 and one special character.";
		} else {
			passwordError = "";
		}
	}
	return passwordError;
};
