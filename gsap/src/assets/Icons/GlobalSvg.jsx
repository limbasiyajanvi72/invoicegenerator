import React, { useEffect, useState } from "react";

function GlobalSvg() {
	const [size, setSize] = useState(52);
	useEffect(() => {
		if (window.location.pathname.includes("/dashboard")) {
			setSize(32);
		}
	}, []);

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
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
			<path d='M3.55556 19.2L9.6 13.1556H16V19.2' fill='#1565C0' />
			<path d='M28.4444 19.2L22.4 13.1556H16V19.2' fill='#10519D' />
			<path
				d='M16 25.9556H9.95555L12.9778 22.7556L16 25.9556Z'
				fill='#1565C0'
			/>
			<path d='M16 32L22.0444 25.9556L16 25.9556V32Z' fill='#1878C6' />
			<path d='M16 32L9.95555 25.9556H16V32Z' fill='#2196F3' />
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
	);
}

export default GlobalSvg;