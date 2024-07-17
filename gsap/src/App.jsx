import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Signin />} />

					<Route path='/register' element={<Register />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
