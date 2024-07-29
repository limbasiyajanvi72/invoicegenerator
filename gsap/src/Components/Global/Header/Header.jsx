import React, { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineTextFields } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiSignOutBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import "./Header.css";

function Header() {
	const [menu, setToggleMenu] = useState({ lang: false, profile: false });
	const [searchBar, setSearchBar] = useState(false);

	const closeLanguageMenu = () => {
		if (menu.lang) {
			setToggleMenu({ ...menu, lang: false });
		}
	};

	const closeProfileMenu = () => {
		if (menu.profile) {
			setToggleMenu({ ...menu, profile: false });
		}
	};

	const enterFullscreen = () => {
		document.documentElement.requestFullscreen();
	};
	return (
		<div className='heder-container'>
			{searchBar ? (
				<>
					<input
						type='text'
						className='serach-style'
						placeholder='search'
					/>
					<IoMdClose
						onClick={() => setSearchBar(false)}
						style={{
							color: "#757575",
							height: "24px",
							width: "24px",
							padding: "18px",
							cursor: "pointer",
						}}
					/>
				</>
			) : (
				<>
					<div className='header-icon-container'>
						<IoIosCalendar
							style={{
								color: "#757575",
								height: "24px",
								width: "24px",
								cursor: "pointer",
							}}
						/>
						<MdOutlineMailOutline
							style={{
								color: "#757575",
								height: "24px",
								width: "24px",
								cursor: "pointer",
							}}
						/>
						<IoMdContacts
							style={{
								color: "#757575",
								height: "24px",
								width: "24px",
								cursor: "pointer",
							}}
						/>
						<div style={{ cursor: "pointer" }}>
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
					</div>

					<div className='header-profile-container'>
						<div className='header-profile-icon'>
							<div
								className='language-container'
								onClick={() =>
									setToggleMenu({ ...menu, lang: true })
								}
							>
								<svg
									version='1.1'
									id='Layer_1'
									xmlns='http://www.w3.org/2000/svg'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									x='0px'
									y='0px'
									viewBox='0 0 55.2 38.4'
									style={{
										enableBackground: "new 0 0 55.2 38.4",
										height: "24px",
										width: "24px",
									}}
									xmlSpace='preserve'
								>
									<style type='text/css'>
										{`.st0{fill:#B22234;} .st1{fill:#FFFFFF;} .st2{fill:#3C3B6E;}`}
									</style>
									<g>
										<path
											className='st0'
											d='M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z'
										/>
										<path
											className='st1'
											d='M0.02,2.73h55.17c0.01,0.1,0.02,0.2,0.02,0.31v2.94H0V3.03C0,2.93,0.01,2.83,0.02,2.73L0.02,2.73z M55.2,8.67 v3.24H0V8.67H55.2L55.2,8.67z M55.2,14.61v3.24H0v-3.24H55.2L55.2,14.61z M55.2,20.55v3.24H0v-3.24H55.2L55.2,20.55z M55.2,26.49 v3.24H0v-3.24H55.2L55.2,26.49z M55.2,32.43v2.93c0,0.1-0.01,0.21-0.02,0.31H0.02C0.01,35.58,0,35.47,0,35.37v-2.93H55.2 L55.2,32.43z'
										/>
										<path
											className='st2'
											d='M20.8,0v20.68H0V3.03C0,1.36,1.36,0,3.03,0H20.8L20.8,0L20.8,0z'
										/>
										<polygon
											className='st1'
											points='1.23,2.86 1.92,5.01 0.1,3.68 2.36,3.68 0.53,5.01 1.23,2.86'
										/>
										<polygon
											className='st1'
											points='1.23,7.02 1.92,9.17 0.1,7.84 2.36,7.84 0.53,9.17 1.23,7.02'
										/>
										<polygon
											className='st1'
											points='1.23,11.18 1.92,13.33 0.1,12 2.36,12 0.53,13.33 1.23,11.18'
										/>
										<polygon
											className='st1'
											points='1.23,15.34 1.92,17.49 0.1,16.16 2.36,16.16 0.53,17.49 1.23,15.34'
										/>
										<polygon
											className='st1'
											points='3.67,0.78 4.37,2.93 2.54,1.6 4.81,1.6 2.97,2.93 3.67,0.78'
										/>
										<polygon
											className='st1'
											points='3.67,4.94 4.37,7.09 2.54,5.76 4.81,5.76 2.97,7.09 3.67,4.94'
										/>
										<polygon
											className='st1'
											points='3.67,9.1 4.37,11.25 2.54,9.92 4.81,9.92 2.97,11.25 3.67,9.1'
										/>
										<polygon
											className='st1'
											points='3.67,13.26 4.37,15.41 2.54,14.08 4.81,14.08 2.97,15.41 3.67,13.26'
										/>
										<polygon
											className='st1'
											points='3.67,17.42 4.37,19.57 2.54,18.24 4.81,18.24 2.97,19.57 3.67,17.42'
										/>
										<polygon
											className='st1'
											points='6.12,2.86 6.82,5.01 4.99,3.68 7.25,3.68 5.42,5.01 6.12,2.86'
										/>
										<polygon
											className='st1'
											points='6.12,7.02 6.82,9.17 4.99,7.84 7.25,7.84 5.42,9.17 6.12,7.02'
										/>
										<polygon
											className='st1'
											points='6.12,11.18 6.82,13.33 4.99,12 7.25,12 5.42,13.33 6.12,11.18'
										/>
										<polygon
											className='st1'
											points='6.12,15.34 6.82,17.49 4.99,16.16 7.25,16.16 5.42,17.49 6.12,15.34'
										/>
										<polygon
											className='st1'
											points='8.57,0.78 9.26,2.93 7.44,1.6 9.7,1.6 7.87,2.93 8.57,0.78'
										/>
										<polygon
											className='st1'
											points='8.57,4.94 9.26,7.09 7.44,5.76 9.7,5.76 7.87,7.09 8.57,4.94'
										/>
										<polygon
											className='st1'
											points='8.57,9.1 9.26,11.25 7.44,9.92 9.7,9.92 7.87,11.25 8.57,9.1'
										/>
										<polygon
											className='st1'
											points='8.57,13.26 9.26,15.41 7.44,14.08 9.7,14.08 7.87,15.41 8.57,13.26'
										/>
										<polygon
											className='st1'
											points='8.57,17.42 9.26,19.57 7.44,18.24 9.7,18.24 7.87,19.57 8.57,17.42'
										/>
										<polygon
											className='st1'
											points='11.01,2.86 11.71,5.01 9.88,3.68 12.14,3.68 10.31,5.01 11.01,2.86'
										/>
										<polygon
											className='st1'
											points='11.01,7.02 11.71,9.17 9.88,7.84 12.14,7.84 10.31,9.17 11.01,7.02'
										/>
										<polygon
											className='st1'
											points='11.01,11.18 11.71,13.33 9.88,12 12.14,12 10.31,13.33 11.01,11.18'
										/>
										<polygon
											className='st1'
											points='11.01,15.34 11.71,17.49 9.88,16.16 12.14,16.16 10.31,17.49 11.01,15.34'
										/>
										<polygon
											className='st1'
											points='13.46,0.78 14.16,2.93 12.33,1.6 14.59,1.6 12.76,2.93 13.46,0.78'
										/>
										<polygon
											className='st1'
											points='13.46,4.94 14.16,7.09 12.33,5.76 14.59,5.76 12.76,7.09 13.46,4.94'
										/>
										<polygon
											className='st1'
											points='13.46,9.1 14.16,11.25 12.33,9.92 14.59,9.92 12.76,11.25 13.46,9.1'
										/>
										<polygon
											className='st1'
											points='13.46,13.26 14.16,15.41 12.33,14.08 14.59,14.08 12.76,15.41 13.46,13.26'
										/>
										<polygon
											className='st1'
											points='13.46,17.42 14.16,19.57 12.33,18.24 14.59,18.24 12.76,19.57 13.46,17.42'
										/>
										<polygon
											className='st1'
											points='15.9,2.86 16.6,5.01 14.77,3.68 17.03,3.68 15.21,5.01 15.9,2.86'
										/>
										<polygon
											className='st1'
											points='15.9,7.02 16.6,9.17 14.77,7.84 17.03,7.84 15.21,9.17 15.9,7.02'
										/>
										<polygon
											className='st1'
											points='15.9,11.18 16.6,13.33 14.77,12 17.03,12 15.21,13.33 15.9,11.18'
										/>
										<polygon
											className='st1'
											points='15.9,15.34 16.6,17.49 14.77,16.16 17.03,16.16 15.21,17.49 15.9,15.34'
										/>
										<polygon
											className='st1'
											points='18.35,0.78 19.05,2.93 17.22,1.6 19.48,1.6 17.65,2.93 18.35,0.78'
										/>
										<polygon
											className='st1'
											points='18.35,4.94 19.05,7.09 17.22,5.76 19.48,5.76 17.65,7.09 18.35,4.94'
										/>
										<polygon
											className='st1'
											points='18.35,9.1 19.05,11.25 17.22,9.92 19.48,9.92 17.65,11.25 18.35,9.1'
										/>
										<polygon
											className='st1'
											points='18.35,13.26 19.05,15.41 17.22,14.08 19.48,14.08 17.65,15.41 18.35,13.26'
										/>
										<polygon
											className='st1'
											points='18.35,17.42 19.05,19.57 17.22,18.24 19.48,18.24 17.65,19.57 18.35,17.42'
										/>
									</g>
								</svg>
								<span>EN</span>
							</div>
							{menu.lang && (
								<>
									<div className='menu-container'>
										<div>
											<svg
												version='1.1'
												id='Layer_1'
												xmlns='http://www.w3.org/2000/svg'
												xmlnsXlink='http://www.w3.org/1999/xlink'
												x='0px'
												y='0px'
												viewBox='0 0 55.2 38.4'
												style={{
													enableBackground:
														"new 0 0 55.2 38.4",
													height: "24px",
													width: "24px",
												}}
												xmlSpace='preserve'
											>
												<style type='text/css'>
													{`.st0{fill:#B22234;} .st1{fill:#FFFFFF;} .st2{fill:#3C3B6E;}`}
												</style>
												<g>
													<path
														className='st0'
														d='M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z'
													/>
													<path
														className='st1'
														d='M0.02,2.73h55.17c0.01,0.1,0.02,0.2,0.02,0.31v2.94H0V3.03C0,2.93,0.01,2.83,0.02,2.73L0.02,2.73z M55.2,8.67 v3.24H0V8.67H55.2L55.2,8.67z M55.2,14.61v3.24H0v-3.24H55.2L55.2,14.61z M55.2,20.55v3.24H0v-3.24H55.2L55.2,20.55z M55.2,26.49 v3.24H0v-3.24H55.2L55.2,26.49z M55.2,32.43v2.93c0,0.1-0.01,0.21-0.02,0.31H0.02C0.01,35.58,0,35.47,0,35.37v-2.93H55.2 L55.2,32.43z'
													/>
													<path
														className='st2'
														d='M20.8,0v20.68H0V3.03C0,1.36,1.36,0,3.03,0H20.8L20.8,0L20.8,0z'
													/>
													<polygon
														className='st1'
														points='1.23,2.86 1.92,5.01 0.1,3.68 2.36,3.68 0.53,5.01 1.23,2.86'
													/>
													<polygon
														className='st1'
														points='1.23,7.02 1.92,9.17 0.1,7.84 2.36,7.84 0.53,9.17 1.23,7.02'
													/>
													<polygon
														className='st1'
														points='1.23,11.18 1.92,13.33 0.1,12 2.36,12 0.53,13.33 1.23,11.18'
													/>
													<polygon
														className='st1'
														points='1.23,15.34 1.92,17.49 0.1,16.16 2.36,16.16 0.53,17.49 1.23,15.34'
													/>
													<polygon
														className='st1'
														points='3.67,0.78 4.37,2.93 2.54,1.6 4.81,1.6 2.97,2.93 3.67,0.78'
													/>
													<polygon
														className='st1'
														points='3.67,4.94 4.37,7.09 2.54,5.76 4.81,5.76 2.97,7.09 3.67,4.94'
													/>
													<polygon
														className='st1'
														points='3.67,9.1 4.37,11.25 2.54,9.92 4.81,9.92 2.97,11.25 3.67,9.1'
													/>
													<polygon
														className='st1'
														points='3.67,13.26 4.37,15.41 2.54,14.08 4.81,14.08 2.97,15.41 3.67,13.26'
													/>
													<polygon
														className='st1'
														points='3.67,17.42 4.37,19.57 2.54,18.24 4.81,18.24 2.97,19.57 3.67,17.42'
													/>
													<polygon
														className='st1'
														points='6.12,2.86 6.82,5.01 4.99,3.68 7.25,3.68 5.42,5.01 6.12,2.86'
													/>
													<polygon
														className='st1'
														points='6.12,7.02 6.82,9.17 4.99,7.84 7.25,7.84 5.42,9.17 6.12,7.02'
													/>
													<polygon
														className='st1'
														points='6.12,11.18 6.82,13.33 4.99,12 7.25,12 5.42,13.33 6.12,11.18'
													/>
													<polygon
														className='st1'
														points='6.12,15.34 6.82,17.49 4.99,16.16 7.25,16.16 5.42,17.49 6.12,15.34'
													/>
													<polygon
														className='st1'
														points='8.57,0.78 9.26,2.93 7.44,1.6 9.7,1.6 7.87,2.93 8.57,0.78'
													/>
													<polygon
														className='st1'
														points='8.57,4.94 9.26,7.09 7.44,5.76 9.7,5.76 7.87,7.09 8.57,4.94'
													/>
													<polygon
														className='st1'
														points='8.57,9.1 9.26,11.25 7.44,9.92 9.7,9.92 7.87,11.25 8.57,9.1'
													/>
													<polygon
														className='st1'
														points='8.57,13.26 9.26,15.41 7.44,14.08 9.7,14.08 7.87,15.41 8.57,13.26'
													/>
													<polygon
														className='st1'
														points='8.57,17.42 9.26,19.57 7.44,18.24 9.7,18.24 7.87,19.57 8.57,17.42'
													/>
													<polygon
														className='st1'
														points='11.01,2.86 11.71,5.01 9.88,3.68 12.14,3.68 10.31,5.01 11.01,2.86'
													/>
													<polygon
														className='st1'
														points='11.01,7.02 11.71,9.17 9.88,7.84 12.14,7.84 10.31,9.17 11.01,7.02'
													/>
													<polygon
														className='st1'
														points='11.01,11.18 11.71,13.33 9.88,12 12.14,12 10.31,13.33 11.01,11.18'
													/>
													<polygon
														className='st1'
														points='11.01,15.34 11.71,17.49 9.88,16.16 12.14,16.16 10.31,17.49 11.01,15.34'
													/>
													<polygon
														className='st1'
														points='13.46,0.78 14.16,2.93 12.33,1.6 14.59,1.6 12.76,2.93 13.46,0.78'
													/>
													<polygon
														className='st1'
														points='13.46,4.94 14.16,7.09 12.33,5.76 14.59,5.76 12.76,7.09 13.46,4.94'
													/>
													<polygon
														className='st1'
														points='13.46,9.1 14.16,11.25 12.33,9.92 14.59,9.92 12.76,11.25 13.46,9.1'
													/>
													<polygon
														className='st1'
														points='13.46,13.26 14.16,15.41 12.33,14.08 14.59,14.08 12.76,15.41 13.46,13.26'
													/>
													<polygon
														className='st1'
														points='13.46,17.42 14.16,19.57 12.33,18.24 14.59,18.24 12.76,19.57 13.46,17.42'
													/>
													<polygon
														className='st1'
														points='15.9,2.86 16.6,5.01 14.77,3.68 17.03,3.68 15.21,5.01 15.9,2.86'
													/>
													<polygon
														className='st1'
														points='15.9,7.02 16.6,9.17 14.77,7.84 17.03,7.84 15.21,9.17 15.9,7.02'
													/>
													<polygon
														className='st1'
														points='15.9,11.18 16.6,13.33 14.77,12 17.03,12 15.21,13.33 15.9,11.18'
													/>
													<polygon
														className='st1'
														points='15.9,15.34 16.6,17.49 14.77,16.16 17.03,16.16 15.21,17.49 15.9,15.34'
													/>
													<polygon
														className='st1'
														points='18.35,0.78 19.05,2.93 17.22,1.6 19.48,1.6 17.65,2.93 18.35,0.78'
													/>
													<polygon
														className='st1'
														points='18.35,4.94 19.05,7.09 17.22,5.76 19.48,5.76 17.65,7.09 18.35,4.94'
													/>
													<polygon
														className='st1'
														points='18.35,9.1 19.05,11.25 17.22,9.92 19.48,9.92 17.65,11.25 18.35,9.1'
													/>
													<polygon
														className='st1'
														points='18.35,13.26 19.05,15.41 17.22,14.08 19.48,14.08 17.65,15.41 18.35,13.26'
													/>
													<polygon
														className='st1'
														points='18.35,17.42 19.05,19.57 17.22,18.24 19.48,18.24 17.65,19.57 18.35,17.42'
													/>
												</g>
											</svg>
											<span>English</span>
										</div>
										<div>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												shapeRendering='geometricPrecision'
												textRendering='geometricPrecision'
												imageRendering='optimizeQuality'
												fillRule='evenodd'
												clipRule='evenodd'
												viewBox='0 0 512 356.18'
												style={{
													height: "24px",
													width: "24px",
												}}
											>
												<g fillRule='nonzero'>
													<path
														fill='#E30A17'
														d='M28.137 0H483.86C499.337 0 512 12.663 512 28.14v299.9c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04V28.14C0 12.663 12.663 0 28.137 0z'
													/>
													<path
														fill='#fff'
														d='M253.365 130.516c-15.783-24.923-43.598-41.473-75.281-41.473-49.179 0-89.047 39.868-89.047 89.047 0 49.179 39.868 89.047 89.047 89.047 31.684 0 59.498-16.55 75.282-41.475-13.042 14.526-31.963 23.665-53.021 23.665-39.342 0-71.237-31.893-71.237-71.237 0-39.344 31.895-71.237 71.237-71.237 21.058 0 39.978 9.138 53.02 23.663zm-4.785 47.574l80.543 26.169-49.778-68.514v84.688l49.778-68.514-80.543 26.171z'
													/>
												</g>
											</svg>
											<span>Turkish</span>
										</div>
										<div>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												shapeRendering='geometricPrecision'
												textRendering='geometricPrecision'
												imageRendering='optimizeQuality'
												fillRule='evenodd'
												clipRule='evenodd'
												viewBox='0 0 512 356.18'
												style={{
													width: "25px",
												}}
											>
												<g fillRule='nonzero'>
													<path
														fill='#00732F'
														d='M28.137 0H483.86C499.337 0 512 12.663 512 28.14v299.9c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04V28.14C0 12.663 12.663 0 28.137 0z'
													/>
													<path
														fill='#fff'
														d='M512 118.726H0V328.04c0 15.477 12.663 28.14 28.137 28.14H483.86c15.477 0 28.14-12.663 28.14-28.14V118.726z'
													/>
													<path d='M512 237.454H0v90.586c0 15.477 12.663 28.14 28.137 28.14H483.86c15.477 0 28.14-12.663 28.14-28.14v-90.586z' />
													<path
														fill='red'
														d='M142.871 356.18V0H28.137C12.663 0 0 12.663 0 28.14v299.9c0 15.477 12.663 28.14 28.137 28.14h114.734z'
													/>
												</g>
											</svg>
											<span>Arabic</span>
										</div>
									</div>
									<div
										className='backdrop-container'
										onClick={() => closeLanguageMenu()}
									></div>
								</>
							)}
							<MdOutlineTextFields
								style={{
									height: "25px",
									width: "25px",
									color: "#6B7280",
									cursor: "pointer",
								}}
							/>
							<BsArrowsFullscreen
								style={{
									height: "18px",
									width: "18px",
									color: "#6B7280",
									cursor: "pointer",
								}}
								onClick={() => enterFullscreen()}
							/>
							<IoSearch
								style={{
									height: "24px",
									width: "24px",
									color: "#6B7280",
									cursor: "pointer",
								}}
								onClick={() => setSearchBar(true)}
							/>
							<FaRegBookmark
								style={{
									height: "22px",
									width: "22px",
									color: "#6B7280",
									cursor: "pointer",
								}}
							/>
							<FaRegBell
								style={{
									height: "22px",
									width: "22px",
									color: "#6B7280",
									cursor: "pointer",
								}}
							/>
						</div>
						<div
							className='header-profile-section'
							onClick={() =>
								setToggleMenu({ ...menu, profile: true })
							}
						>
							<div>
								<span>Abbott Keitch</span>
								<span>Admin</span>
							</div>
							<img
								src='https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg'
								className='header-profile-picture'
							/>
						</div>
						{menu.profile && (
							<>
								<div className='profile-menu-container'>
									<div className='profile-menu-icon'>
										<CgProfile
											style={{
												height: "24px",
												width: "24px",
												color: "#919191",
											}}
										/>
										<MdOutlineMailOutline
											style={{
												height: "24px",
												width: "24px",
												color: "#919191",
											}}
										/>
										<PiSignOutBold
											style={{
												height: "24px",
												width: "24px",
												color: "#919191",
											}}
										/>
									</div>
									<div className='profile-menu-icon menu-gap'>
										<span>My Profile</span>
										<span>Inbox</span>
										<span>Sign out</span>
									</div>
								</div>
								<div
									className='backdrop-container'
									onClick={() => closeProfileMenu()}
								></div>
							</>
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default Header;
