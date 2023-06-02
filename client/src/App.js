import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/Home";
import TeacherForm from "./pages/TeacherForm";
import Login from "./pages/Login";
import StudentRegistration from "./pages/StudentRegistration";
import StudentProfile from "./pages/StudentProfile";

// import { Router } from "express";
import TeacherProfile from "./pages/TeacherProfile";
import Newsletter from "./pages/NewsLetter";
import Donation from "./pages/Donation";
import Info from "./pages/Info";

const App = () => (
	<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/info" element={<Info />} />
			<Route path="/student-registration" element={<StudentRegistration />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/admin/teacher-registration" element={<TeacherForm />} />
			<Route path="/studentprofile/:id" element={<StudentProfile />} />
			<Route path="/teacher/profile" element={<TeacherProfile />} />
			<Route path="/donation" element={<Donation />} />
			<Route path="/newsletter" element={<Newsletter />} />
		</Routes>
	</div>
);

export default App;
