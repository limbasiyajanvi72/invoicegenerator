import React from "react";
import "./Projects.css";
import { FaBell } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Projects() {
	return (
		<section>
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
				<div className='project-menu-container'>
					ACME Corp. Backend App
					<span>
						<MdOutlineKeyboardArrowDown
							style={{ height: "20px", width: "20px" }}
						/>
					</span>
				</div>
			</article>
		</section>
	);
}

export default Projects;
