import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import TeacherForm from "./pages/TeacherForm";
import Navbar from "./component/NavBar";
import InfoPage from "./pages/Info";
// import { Router } from "express";

const App = () => (
	<div>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/info" element={<InfoPage />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/admin/teacher-registration" element={<TeacherForm />} />
		</Routes>
		<Footer />
	</div>
);

export default App;
