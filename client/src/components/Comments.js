import { Form, FloatingLabel, Button } from "react-bootstrap";

const Comments = () => (
	<FloatingLabel controlId="floatingTextarea" label="Comments">
		<Form.Control
			as="textarea"
			placeholder="Leave a comment here"
			style={{
				height: "70%",
			}}
		/>
		<Button
			className="d-flex justify-content-center, mb-3"
			fluid="md"
			variant="dark"
			type="submit"
			block="true"
			style={{
				marginTop: "1rem",
				width: "100%",
				height: "30%",
			}}
		>
			Submit
		</Button>
	</FloatingLabel>
);

export default Comments;
