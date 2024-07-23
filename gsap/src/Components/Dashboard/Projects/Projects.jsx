import React from "react";
import "./Projects.css";
import { FaBell } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function Projects() {
	return (
		<section>
			<article className='project-heading-container'>
				<div className='project-profile-container'>
					<img
						src='https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg'
						className='profile-container'
					/>
					<div>
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
							<p className='notification-style'>
								You have 2 new messages and 15 new tasks
							</p>
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
			</article>
		</section>
	);
}

export default Projects;
