import { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
import Template from "../components/Template";
import { Link } from "react-router-dom";

import "./Home.css";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then(() => setMessage(message))
			.catch((err) => err);
	}, [message]);

	return (
		<main role="main">
			<Template>
				<Container className="d-flex justify-content-center, p-3" fluid="md">
					<Row className="align-items-center">
						<Col xs={12} sm={6}>
							<Card className="flex-column, p-3">
								<Card.Title as="h1">
									Welcome to Douglas Road Primary School
								</Card.Title>
								<Card.Text>
									<h2>Our vision</h2>
									<p>
										To create an educational environment and to develop the
										skills of our learners in order for them to play a
										meaningful role in society. Our educators are to be kept
										abreast of new developments in education on order that our
										learners gain excellence in education.
									</p>
									<h2>Our mission</h2>
									<p>
										To strive to maintain a high level of education by educating
										our children to become responsible in order that they my
										play a meaningful role in society as well as to provide the
										staff with the opportunity for professional growth enabling
										them to deliver the best possible education to our learners.
									</p>
								</Card.Text>
								<Link to="student-registration">
									<Button
										className="mb-3"
										variant="dark"
										type="submit"
										block="true"
									>
										{" "}
										Register a new student
									</Button>
								</Link>{" "}
							</Card>
						</Col>
						<Col xs={12} sm={6}>
							<Card className="flex-column, p-3">
								<Image
									src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/308967485_521389659992173_8483769297812494645_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=piYsq29mr6EAX-nJTeI&_nc_ht=scontent-cpt1-1.xx&oh=00_AfDI-R1dRDaLaukWyuw8b02E9WBSRoKUcWfhfhjwvkyokA&oe=6475CE44"
									alt="front of school"
									fluid
									height="100%"
									className="flex-column"
								/>
							</Card>
						</Col>
					</Row>
				</Container>
			</Template>
		</main>
	);
}

export default Home;
