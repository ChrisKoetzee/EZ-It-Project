
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

export function Home() {

	return (
		<main role="main">
			<div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
				<Link to="/admin/teacher-registration">Register a Teacher</Link>
			</div>
		</main>
	);
}

export default Home;
