import React from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Global/Header/Header";

function Layout() {
	return (
		<div className='layout-container '>
			<Sidebar />
			<div>
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
