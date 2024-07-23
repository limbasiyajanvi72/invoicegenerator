import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Signin from "./Components/Signin/Signin";
import Dashbord from "./Components/Dashboard/Dashbord";
import SignUp from "./Components/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";
import Projects from "./Components/Dashboard/Projects/Projects";
import Analytics from "./Components/Dashboard/Analytics/Analytics";
import Finance from "./Components/Dashboard/Finance/Finance";
import Crypto from "./Components/Dashboard/Crypto/Crypto";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Signin />} />
					<Route path='/signup' element={<SignUp />} />
					<Route element={<Layout />}>
						<Route
							path='/dashboard/projects'
							element={<Projects />}
						/>
						<Route
							path='/dashboard/analytics'
							element={<Analytics />}
						/>
						<Route
							path='/dashboard/finance'
							element={<Finance />}
						/>
						<Route path='/dashboard/crypto' element={<Crypto />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
