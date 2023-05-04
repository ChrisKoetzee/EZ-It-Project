import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registraction from "./pages/Registraction";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/login/this/site" element={<Login />} />
		<Route path="/registraction/this/site" element={<Registraction/>} />
	</Routes>
);

export default App;
