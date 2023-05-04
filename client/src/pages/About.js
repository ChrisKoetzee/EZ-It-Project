import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const About = () => (
	<main role="main" style={{ width:"800px",margin:"100px auto" }}>
		<div>
			<h1>About</h1>
			<p>
				Starter kit for full-stack JavaScript projects. For more information,
				see the wiki:
			</p>
			
			<Link to="/login/this/site">
				<Button variant="primary" style={{ width:"150px",margin:"20px",backgroundColor:"#0F172A",border:"none",height:"50px"}}>Log In</Button>
			</Link>

			<Link to="/registraction/this/site">
				<Button variant="primary" style={{ width:"150px",margin:"20px",backgroundColor:"#0F172A",border:"none",height:"50px" }}>Registraction</Button>
			</Link>
		</div>
	</main>
);

export default About;
