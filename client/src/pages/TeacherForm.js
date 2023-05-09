import React from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
// import Template from "/Components/Template";

const TeacherForm = () => {
	return (
		<Container className="d-flex justify-content-center" fluid="md">
			{/* <Template /> */}
			<Form>
				<h1>Register A Teacher</h1>
				<p>Please enter the details below to register a teacher</p>

				<Row>
					<Col xs={12} sm={6}>
						<Form.Group className="mb-3" controlId="text">
							<Form.Label>Full first names</Form.Label>
							<Form.Control type="text" placeholder="Enter full first names" />
						</Form.Group>
					</Col>
					<Col xs={12} sm={6}>
						<Form.Group className="mb-3" controlId="text">
							<Form.Label>Surname</Form.Label>
							<Form.Control type="text" placeholder="Enter Surname" />
						</Form.Group>
					</Col>
				</Row>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email Address</Form.Label>
					<Form.Control type="text" placeholder="Enter email address" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="number">
					<Form.Label>Mobile Number</Form.Label>
					<Form.Control type="number" placeholder="Enter your mobile nummber" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						type="checkbox"
						label="Do you aggree to our terms and conditions"
					/>
				</Form.Group>

				<Form.Group>
					<Button className="mb-3" variant="dark" type="submit" block="true">
						Register
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default TeacherForm;
