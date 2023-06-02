import Template from "../components/Template";
import { Container, Col, Row, Table, Card } from "react-bootstrap";
import SelectStudent from "../components/SelectStudent";
import UpdateGrade from "../components/UpdateGrade";
import ModalPopUp from "../components/ModalPopUp";

const TeacherProfile = () => {
	return (
		<Template>
			<h1 className="text-center">Teacher profile</h1>
			<Container className="d-flex justify-content-center" fluid="xl">
				<Row className="align-items-center">
					<Col xs={12} sm={4} md={4}>
						<Card
							className="flex-column, p-3, mb-3"
							style={{
								margin: "10px",
								padding: "10px",
							}}
						>
							<Card.Title as="h2">Select a Student</Card.Title>
							<SelectStudent />
						</Card>
					</Col>
					<Col xs={12} sm={8} md={8}>
						<Table striped bordered hover variant="primary">
							<thead>
								<tr>
									<th>#</th>
									<th>Subject</th>
									<th>Expected pass mark</th>
									<th>Student grade</th>
									<th>Comments</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>English</td>
									<td>50%</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>2</td>
									<td>Afrikaans</td>
									<td>50%</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>3</td>
									<td>Mathematics</td>
									<td>50%</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>4</td>
									<td>N.S. Technology</td>
									<td>50%</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>5</td>
									<td>Geography</td>
									<td>50%</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>6</td>
									<td>Life orientation</td>
									<td>50%</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>7</td>
									<td>History</td>
									<td>50%</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>8</td>
									<td>Arts and culture</td>
									<td>50%</td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
			<UpdateGrade />
			<ModalPopUp />
		</Template>
	);
};

export default TeacherProfile;
