import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Template from "../components/Template";

const InfoPage = () => {
	return (
		<Template>
			<div>
				<Container className="mt-5">
					<Card.Title as="h1">School History</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Card.Text>
					<Row>
						<Col md={4}>
							<Card>
								<Card.Body>
									<Card.Title>Principal</Card.Title>
								</Card.Body>
								<Card.Img
									variant="top"
									src="https://plus.unsplash.com/premium_photo-1683195788099-0f83ca85ec65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=6npmm0"
									alt="Rehabilitation"
								/>
							</Card>
						</Col>
						<Col md={4}>
							<Card>
								<Card.Body>
									<Card.Title>Education Support</Card.Title>
								</Card.Body>
								<Card.Img
									variant="top"
									src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
									alt="Education Support"
								/>
							</Card>
						</Col>
						<Col md={4}>
							<Card>
								<Card.Body>
									<Card.Title>Parents</Card.Title>
								</Card.Body>
								<Card.Img
									variant="top"
									src="https://cdn.24.co.za/files/Cms/General/d/8825/c9c0587b0d9d434eb4b373f39200d00f.jpg"
									alt="Bursary Assistance"
								/>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</Template>
	);
};

export default InfoPage;
