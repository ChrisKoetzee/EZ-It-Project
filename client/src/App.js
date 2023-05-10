import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import TeacherForm from "./pages/TeacherForm";

const App = () => (
	<Routes>
		<Route path="/home/this/site" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Footer />
		<Route path="/admin/teacher-registration" element={<TeacherForm />} />
	</Routes>
);

export default App;
