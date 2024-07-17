import React, { useState } from "react";
import useIncrement from "../CustomHook/useIncrement";

export const CompA = () => {
	const [count, increment] = useIncrement(0);
	const names = ["Hello World", "abc", "def", "hij"];
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
	};

	return (
		<div>
			<p className='text-slate-300 m-3'>CompA</p>
			<p className='text-slate-300 m-3'>{count}</p>
			<button
				onClick={increment}
				className='bg-slate-600 rounded p-3 m-2'
			>
				Click
			</button>

			<h1 onClick={handleClick}>{names[currentIndex]}</h1>
		</div>
	);
};
