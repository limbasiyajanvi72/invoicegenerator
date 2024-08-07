import React from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import "./Home.css";

function Home() {
	return (
		<section className='home-container'>
			<article className='card-container'>
				<div className='card-style'>
					<div className='card-heading'>
						<span>Today</span>
						<PiDotsThreeOutlineVerticalFill />
					</div>
					<div className='main-card1'>
						<span className='main-first-content'>25</span>
						<span className='main-second-content'>Due Tasks</span>
					</div>
					<div className='card-update-info'>
						<span>Completed: </span>
						<span>7</span>
					</div>
				</div>
				<div className='card-style'>
					<div className='card-heading'>
						<span>Overdue</span>
						<PiDotsThreeOutlineVerticalFill />
					</div>
					<div className='main-card2'>
						<span className='main-first-content'>4</span>
						<span className='main-second-content'>Tasks</span>
					</div>
					<div className='card-update-info'>
						<span>Yesterday's overdue: </span>
						<span>2</span>
					</div>
				</div>
				<div className='card-style'>
					<div className='card-heading'>
						<span>Issues</span>
						<PiDotsThreeOutlineVerticalFill />
					</div>
					<div className='main-card3'>
						<span className='main-first-content'>32</span>
						<span className='main-second-content'>Open</span>
					</div>
					<div className='card-update-info'>
						<span>Closed today: </span>
						<span>0</span>
					</div>
				</div>
				<div className='card-style'>
					<div className='card-heading'>
						<span>Features</span>
						<PiDotsThreeOutlineVerticalFill />
					</div>
					<div className='main-card4'>
						<span className='main-first-content'>42</span>
						<span className='main-second-content'>Proposals</span>
					</div>
					<div className='card-update-info'>
						<span>Implemented: </span>
						<span>8</span>
					</div>
				</div>
			</article>
			<article></article>
			<article></article>
		</section>
	);
}

export default Home;
