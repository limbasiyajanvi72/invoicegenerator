import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Signin from "./Components/Signin/Signin";
import Dashbord from "./Components/Dashboard/Dashbord";
import SignUp from "./Components/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Signin />} />
					<Route path='/signup' element={<SignUp />} />
					<Route element={<Layout />}>
						<Route path='/dashboard' element={<Dashbord />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
