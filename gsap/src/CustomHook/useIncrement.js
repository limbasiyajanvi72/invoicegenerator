import React, { useState } from "react";

const useIncrement = (initialValue = 0) => {
	const [count, setCount] = useState(initialValue);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};
	return [count, increment];
};

export default useIncrement;
