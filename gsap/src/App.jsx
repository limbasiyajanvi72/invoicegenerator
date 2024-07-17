import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shape from "./Components/Shape";
import { CompA } from "./Components/CompA";
import { CompB } from "./Components/CompB";
import Social from "./Components/Social";
import Button from "./Components/Button/Button";
import Animate from "./Components/Animate/Animate";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Shape />} />
					<Route path='/compA' element={<CompA />} />
					<Route path='/compB' element={<CompB />} />
					<Route path='/social' element={<Social />} />
					<Route path='/button' element={<Button />} />
					<Route path='/animate' element={<Animate />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
