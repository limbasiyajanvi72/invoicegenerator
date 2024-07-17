import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import Dashbord from "./Components/Dashboard/Dashbord";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Signin />} />

					<Route path='/register' element={<Register />} />
					<Route path='/dashboard' element={<Dashbord />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
