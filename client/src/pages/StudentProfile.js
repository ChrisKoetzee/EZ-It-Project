import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import Template from "../components/Template";


const StudentProfile = () => {
	const { id } = useParams();
	const [student, setStudent] = useState();
	const [subjects, setSubjects] = useState([]);

	useEffect(() => {

 fetch(`/api/student/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data.student);
        setSubjects(data.subjects);
      })
      .catch((error) => console.log(error));
  }, [id]);


	if (!student) {
		return <div>Loading...</div>;
	}

	return (
        <Template><br></br>
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<h2>Student Information</h2>
					<p>Full Name: {student.fullnames}</p>
					<p>Surname: {student.surname}</p>
					<p>Date of Birth: {student.dateofbirth}</p>
					<p>Email: {student.email}</p>
					<p>Phone Number: {student.phonenumber}</p>
					<p>Gender: {student.gender}</p>
				</div>
				<div className="col-md-6">
					<h2>Grades and Subjects</h2>
					<Table striped bordered>
						<thead>
							<tr>
								<th>Subject</th>
								<th>Grade</th>
								<th>Comment</th>
							</tr>
						</thead>

						<tbody>
							{subjects.map((subject) => (
								<tr key={subject.id}>
									<td>{subject.subject}</td>
									<td>{subject.grade}</td>
									<td>{subject.comment}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
        <br></br>
        <br></br>
        </Template>
	);
};

export default StudentProfile;


