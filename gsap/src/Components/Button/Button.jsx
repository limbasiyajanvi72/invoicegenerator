import React, { useEffect } from "react";
import "./button.css";

function Button() {
	return (
		<div>
			<button class='btn-76'>
				Button
				<span class='top'></span>
				<span class='right'></span>
				<span class='bottom'></span>
				<span class='left'></span>
			</button>
			<div class='container-button'>
				<div class='hover bt-1'></div>
				<div class='hover bt-2'></div>
				<div class='hover bt-3'></div>
				<div class='hover bt-4'></div>
				<div class='hover bt-5'></div>
				<div class='hover bt-6'></div>
				<button></button>
			</div>
			<input className='text-slate-900 bg-slate-300' />
			<input type='file ' capture='user' accept='image/*' />
			//it tells browser that we accept audio of image from
			microphone/camera
			<p contentEditable className='text-slate-400'>
				this content is editable from paragraph tag.
			</p>
			{/* <meta name='theme-color' content='red' />it is used to set color in mobile browser */}
		</div>
	);
}

export default Button;
