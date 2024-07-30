import React from "react";
import { RiSettings3Fill } from "react-icons/ri";
import { HiOutlineColorSwatch } from "react-icons/hi";

function Settings() {
	return (
		<div className='setting-container'>
			<RiSettings3Fill className='setting-icon setting-animation' />
			<HiOutlineColorSwatch className='setting-icon' />
		</div>
	);
}

export default Settings;
