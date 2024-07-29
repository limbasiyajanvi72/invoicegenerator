import React from "react";
import GlobalSvg from "../../../assets/Icons/GlobalSvg";
import { GoProjectRoadmap } from "react-icons/go";
import { GrAnalytics } from "react-icons/gr";
import { FaMoneyBill } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
	const navigate = useNavigate();
	return (
		<div className='sidebar-container'>
			<article className='sidebar-heading-container'>
				<section className='sidebar-logo-container'>
					<div className='sidebar-logo'>
						<GlobalSvg />
					</div>
					<div className='language-container typescript'>TS</div>
					<div className='language-container javascript'>JS</div>
					<div className='react-container'>
						<img
							className='react-badge'
							src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
							alt='react'
							width='16'
						/>
						<span>React</span>
					</div>
				</section>
				<section className='toggle-container'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 300 150'
						style={{ fill: "#FFFFFF" }}
					>
						<g
							fill='#ffffff'
							fillRule='nonzero'
							stroke='none'
							strokeWidth='1'
							strokeLinecap='butt'
							strokeLinejoin='miter'
							strokeMiterlimit='10'
						>
							<g transform='scale(5.12,5.12)'>
								<path d='M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z' />
							</g>
						</g>
					</svg>
				</section>
			</article>
			<article className='profile-container font-style'>
				<img
					src='https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg'
					className='profile-picture'
				/>
				<section className='profile-info-container'>
					<span className='profile-font'>Abbott Keitch</span>
					<span className='email-font'>admin@fusetheme.com</span>
				</section>
			</article>
			<article className='menu-container'>
				<div className='menu-heading-container'>
					<span className='main-heading'>DASHBOARDS</span>
					<span className='sub-heading '>
						Unique dashboard designs
					</span>
				</div>
				<div className='menu-list'>
					<div
						className='menu-list-style'
						onClick={() => navigate("/dashboard/projects")}
					>
						<GoProjectRoadmap
							style={{
								color: "#FFFFFFB3",
								height: "20px",
								width: "20px",
							}}
						/>
						<div className='menu-name'>Project</div>
					</div>
					<div
						className='menu-list-style'
						onClick={() => navigate("/dashboard/analytics")}
					>
						<GrAnalytics
							style={{
								color: "#FFFFFFB3",
								height: "20px",
								width: "20px",
							}}
						/>
						<div className='menu-name'>Analytics</div>
					</div>
					<div
						className='menu-list-style'
						onClick={() => navigate("/dashboard/finance")}
					>
						<FaMoneyBill
							style={{
								color: "#FFFFFFB3",
								height: "20px",
								width: "20px",
							}}
						/>
						<div className='menu-name'>Finance</div>
					</div>
					<div
						className='menu-list-style'
						onClick={() => navigate("/dashboard/crypto")}
					>
						<LuCircleDollarSign
							style={{
								color: "#FFFFFFB3",
								height: "20px",
								width: "20px",
							}}
						/>
						<div
							className='menu-name'
							onClick={() => navigate("/dashboard/crypto")}
						>
							Crypto
						</div>
					</div>
				</div>
				<div className='menu-heading-container'>
					<span className='main-heading'>APPLICATIONS</span>
					<span className='sub-heading '>
						Custom made application designs
					</span>
				</div>
				<div className='menu-list'>
					<div className='menu-list-style'>
						<HiOutlineAcademicCap
							style={{
								color: "#FFFFFFB3",
								height: "22px",
								width: "22px",
							}}
						/>
						<div className='menu-name'>Academy</div>
					</div>
					<div className='menu-list-style'>
						<FaRegCalendar
							style={{
								color: "#FFFFFFB3",
								height: "20px",
								width: "20px",
							}}
						/>
						<div className='menu-name'>Calendar</div>
					</div>
					<div className='menu-list-style'>
						<MdOutlineMessage
							style={{
								color: "#FFFFFFB3",
								height: "20px",
								width: "20px",
							}}
						/>
						<div className='menu-name'>Message</div>
					</div>
					<div className='menu-list-style'>
						<IoMdContacts
							style={{
								color: "#FFFFFFB3",
								height: "20px",
								width: "20px",
							}}
						/>
						<div className='menu-name'>Contacts</div>
					</div>
				</div>

				<section></section>
			</article>
		</div>
	);
}

export default Sidebar;
