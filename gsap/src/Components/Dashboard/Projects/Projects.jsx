import React, { useState } from "react";
import "./Projects.css";
import { FaBell } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Home from "./Home/Home";
import Budget from "./Budget/Budget";
import Team from "./Team/Team";

function Projects() {
	const [menu, toggleMenu] = useState(false);
	const [tab, setTab] = useState("Home");
	const closeProjectMenu = () => {
		if (menu) {
			toggleMenu(false);
		}
	};
	return (
		<section onClick={() => closeProjectMenu()}>
			<article className='project-heading-container'>
				<div className='project-profile-container'>
					<img
						src='https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg'
						className='profile-container'
					/>
					<div className='profile-data-container'>
						<h4 className='name-style'>
							Welcome back, Abbott Keitch!
						</h4>
						<div className='notification-container'>
							<FaBell
								style={{
									color: "#757575",
									height: "20px",
									width: "20px",
								}}
							/>
							<span className='notification-style'>
								You have 2 new messages and 15 new tasks
							</span>
						</div>
					</div>
				</div>
				<div className='button-container'>
					<button className='message-button'>
						<MdMail
							style={{
								width: "20px",
								height: "20px",
								color: "white",
							}}
						/>
						Messages
					</button>
					<button className='settings-button'>
						<IoMdSettings
							style={{
								width: "20px",
								height: "20px",
								color: "white",
							}}
						/>
						Settings
					</button>
				</div>

				<div
					className={`project-menu-container `}
					onClick={(e) => {
						toggleMenu(!menu);
						e.stopPropagation();
					}}
				>
					ACME Corp. Backend App
					<span>
						<MdOutlineKeyboardArrowDown
							style={{
								height: "20px",
								width: "20px",
								paddingTop: "5px",
								color: "#6f7072",
								fontWeight: 700,
							}}
						/>
					</span>
				</div>
				{menu && (
					<ul className='project-menu-items'>
						<li className='project-menu'>ACME Corp. Backend App</li>
						<li className='project-menu'>
							ACME Corp. Frontend App
						</li>
						<li className='project-menu'>Creapond</li>
						<li className='project-menu'>Wothinpixels</li>
					</ul>
				)}
			</article>
			<article>
				<ul className='project-tab'>
					<li
						className={`project-tab-item ${
							tab === "Home" ? "bg-active" : ""
						}`}
						onClick={() => setTab("Home")}
					>
						Home
					</li>
					<li
						className={`project-tab-item ${
							tab === "Budget" ? "bg-active" : ""
						}`}
						onClick={() => setTab("Budget")}
					>
						Budget
					</li>
					<li
						className={`project-tab-item ${
							tab === "Team" ? "bg-active" : ""
						}`}
						onClick={() => setTab("Team")}
					>
						Team
					</li>
				</ul>
			</article>
			<article>
				{(() => {
					switch (tab) {
						case "Home":
							return <Home />;
						case "Budget":
							return <Budget />;
						case "Team":
							return <Team />;
						default:
							return <Home />;
					}
				})()}
			</article>
		</section>
	);
}

export default Projects;
