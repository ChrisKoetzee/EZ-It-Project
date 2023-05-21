import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/Home";
import TeacherForm from "./pages/TeacherForm";
import Login from "./pages/Login";
import StudentRegistration from "./pages/StudentRegistration";
// import { Router } from "express";
const App = () => (
	<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/student-registration" element={<StudentRegistration />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/admin/teacher-registration" element={<TeacherForm />} />
		</Routes>
	</div>
);

export default App;
