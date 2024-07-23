import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

function Header() {
	return (
		<div className='heder-container'>
			<div className='header-icon-container'>
				<FaRegCalendarMinus
					style={{ color: "#757575", height: "24px", width: "24px" }}
				/>
				<MdOutlineMailOutline
					style={{ color: "#757575", height: "24px", width: "24px" }}
				/>
				<IoMdContacts
					style={{ color: "#757575", height: "24px", width: "24px" }}
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 256 256'
				>
					<defs></defs>
					<g
						style={{
							stroke: "none",
							strokeWidth: 0,
							strokeDasharray: "none",
							strokeLinecap: "butt",
							strokeLinejoin: "miter",
							strokeMiterlimit: 10,
							fill: "none",
							fillRule: "nonzero",
							opacity: 1,
						}}
						transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'
					>
						<path
							d='M 45.002 75.502 c 2.862 0 5.72 0.684 8.326 2.051 l 19.485 10.243 l -3.721 -21.678 c -1.002 -5.815 0.926 -11.753 5.164 -15.877 L 90 34.895 l -21.768 -3.161 c -5.838 -0.85 -10.884 -4.514 -13.499 -9.806 L 44.998 2.205 l -9.73 19.717 c -2.615 5.292 -7.661 8.962 -13.499 9.811 L 0 34.895 L 15.749 50.25 c 4.224 4.111 6.156 10.044 5.16 15.863 l -3.721 21.682 l 19.466 -10.238 C 39.268 76.19 42.135 75.502 45.002 75.502 z'
							style={{
								stroke: "none",
								strokeWidth: 1,
								strokeDasharray: "none",
								strokeLinecap: "butt",
								strokeLinejoin: "miter",
								strokeMiterlimit: 10,
								fill: "rgb(255,207,100)",
								fillRule: "nonzero",
								opacity: 1,
							}}
							transform='matrix(1 0 0 1 0 0)'
							strokeLinecap='round'
						/>
					</g>
				</svg>
			</div>

			<div className='header-profile-section'>
				<div>
					<span>Abbott Keitch</span>
					<span>admin@fusetheme.com</span>
				</div>
				<img
					src='https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg'
					className='header-profile-picture'
				/>
			</div>
		</div>
	);
}

export default Header;
