import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Signin from "./Components/Signin/Signin";
import Dashbord from "./Components/Dashboard/Dashbord";
import SignUp from "./Components/SignUp/SignUp";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Signin />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/dashboard' element={<Dashbord />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
