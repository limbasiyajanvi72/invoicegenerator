import React, { useState } from "react";
import useIncrement from "../CustomHook/useIncrement";

export const CompB = () => {
	const [count, increment] = useIncrement(0);

	return (
		<div>
			<p className='text-slate-300 m-3'>CompB</p>
			<p className='text-slate-300 m-3'>{count}</p>
			<button
				onClick={increment}
				className='bg-slate-600 rounded p-3 m-2'
			>
				Click
			</button>
		</div>
	);
};
