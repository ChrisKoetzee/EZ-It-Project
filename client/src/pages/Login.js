import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
	return (
		<>
			<h1 style={{ textAlign: "center", marginTop: "3rem" }}>Log In Form</h1>
			<Form style={{ width: "30%", margin: "3.5rem auto" }}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label style={{ fontWeight: "500" }}>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button
					variant="primary"
					type="submit"
					style={{
						width: "100%",
						backgroundColor: "#0F172A",
						border: "none",
						height: "3rem",
					}}
				>
					Login
				</Button>
			</Form>
		</>
	);
};

export default Login;
