import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Registration = () => {
	return (
		<>
			<h1 style={{ textAlign: "center", marginTop: "3rem" }}>
				Registration Form
			</h1>
			<Form style={{ width: "50%", margin: "3.5rem auto" }}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label style={{ fontWeight: "500" }}>Full Name</Form.Label>
					<Form.Control type="text" placeholder="Enter your full name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label style={{ fontWeight: "500" }}>Surname</Form.Label>
					<Form.Control type="text" placeholder="Enter your surname" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label style={{ fontWeight: "500" }}>Email Address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label style={{ fontWeight: "500" }}>Date of Birth</Form.Label>
					<Form.Control type="date" placeholder="Enter your date of birth" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label style={{ fontWeight: "500" }}>Gender</Form.Label>
					<Form.Control as="select" defaultValue="">
						<option value="">Select your gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" />
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
						height: "50px",
					}}
				>
					Registration
				</Button>
			</Form>
		</>
	);
};

export default Registration;
