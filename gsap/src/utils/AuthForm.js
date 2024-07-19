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

	if (password.length < 8 || password.length > 15) {
		passwordError = "Password must be between 8 to 15 characters long";
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

const nameRegex = /^[a-zA-Z]{4,20}$/;

export const validateName = (name) => {
	let nameError = "";

	if (name.length < 4 || name.length > 20) {
		nameError = "Name must be between 4 to 20 characters long";
	} else {
		if (!nameRegex.test(name)) {
			nameError = "Name must be alphabetical letters";
		} else {
			nameError = "";
		}
	}
	return nameError;
};
