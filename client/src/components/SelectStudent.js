import { useState } from "react";
import { Dropdown, Container, Button } from "react-bootstrap";

const SelectStudent = () => {
	const [selectedStudent, setSelectedStudent] = useState("");
	const [selectedGrade, setSelectedGrade] = useState("");

	return (
		<Container>
			<Dropdown className="mb-3">
				<Dropdown.Toggle variant="dark" id="dropdown-basic">
					{selectedGrade ? selectedGrade : "Select a grade"}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onClick={() => setSelectedGrade("Grade 1")}>
						Grade 1
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedGrade("Grade 2")}>
						Grade 2
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedGrade("Grade 3")}>
						Grade 3
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedGrade("Grade 4")}>
						Grade 4
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedGrade("Grade 5")}>
						Grade 5
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedGrade("Grade 6")}>
						Grade 6
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedGrade("Grade 7")}>
						Grade 7
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown className="mb-3">
				<Dropdown.Toggle variant="dark" id="dropdown-basic">
					{selectedStudent ? selectedStudent : "Select a student"}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onClick={() => setSelectedStudent("Aiden")}>
						Aiden
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedStudent("Charles")}>
						Charles
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedStudent("Christian")}>
						Christian
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedStudent("Christopher")}>
						Christopher
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedStudent("Deigo")}>
						Deigo
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedStudent("Loluwethu")}>
						Loluwethu
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedStudent("Shafiek")}>
						Shafiek
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setSelectedStudent("Thabiso")}>
						Thabiso
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Button className="mb-3" variant="dark" type="submit" block="true">
				Submit
			</Button>
		</Container>
	);
};

export default SelectStudent;

// const [studentGrades, setStudentGrades] = useState([]);

// 	useEffect(() => {
// 		if (selectedStudent !== "") {
// 			fetch(`/ENDPOINT/students/${selectedStudent}/grades`)
// 				.then((response) => response.json())
// 				.then((data) => setStudentGrades(data))
// 				.catch((error) => error);
// 		}
// 	}, [selectedStudent]);

// 	const handleStudentChange = (student) => {
// 		setSelectedStudent(student);
// 	};
