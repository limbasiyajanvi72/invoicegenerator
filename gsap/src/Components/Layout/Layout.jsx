import React from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Global/Header/Header";
import Settings from "../Global/Settings/Settings";

function Layout() {
	return (
		<div className='layout-container '>
			<Sidebar />
			<div>
				<Header />
				<Settings />
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
