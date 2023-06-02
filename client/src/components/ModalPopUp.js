import { Button, Modal, Dropdown } from "react-bootstrap";
import { useState } from "react";
import Comments from "./Comments";

const ModalPopUp = (props) => {
	const [selectedSubject, setSelectedSubject] = useState("");
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Update fields below
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Dropdown className="mb-3">
					<Dropdown.Toggle variant="dark" id="dropdown-basic">
						{selectedSubject ? selectedSubject : "Select a subject"}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={() => setSelectedSubject("English")}>
							English
						</Dropdown.Item>
						<Dropdown.Item onClick={() => setSelectedSubject("Afrikaans")}>
							Afrikaans
						</Dropdown.Item>
						<Dropdown.Item onClick={() => setSelectedSubject("Mathematics")}>
							Mathematics
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => setSelectedSubject("N.S. Technologies")}
						>
							N.S. Technologies
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => setSelectedSubject("Life orientation")}
						>
							Life orientation
						</Dropdown.Item>
						<Dropdown.Item onClick={() => setSelectedSubject("Geography")}>
							Geography
						</Dropdown.Item>
						<Dropdown.Item onClick={() => setSelectedSubject("History")}>
							History
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => setSelectedSubject("Arts and culture")}
						>
							Arts and culture
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<input className="mb-3" placeholder="insert grade"></input>
				<Comments className="mb-3" />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalPopUp;
