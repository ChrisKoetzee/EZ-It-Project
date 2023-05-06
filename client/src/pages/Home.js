
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

export function Home() {

	return (
		<div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100%",height:"100vh"}}>
			<Button
  variant="secondary"
  type="submit"
  style={{ backgroundColor: "#0F172A", border: "none" }}
  size="lg"
  className="my-4" // add some margin to the button
>
  <Link to="/about/this/site" style={{ color: "white", textDecoration: "none" }}>
    About
  </Link>
</Button>


		</div>		
	);
}

export default Home;
