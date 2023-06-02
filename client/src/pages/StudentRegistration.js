import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Template from "../components/Template";

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		fullNames: "",
		surname: "",
		gender: "",
		dateOfBirth: "",
		email: "",
		phoneNumber: "",
		password: "",
	});

	const handleInputChange = (event) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("/api/student/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.message) {
					toast.success("Registration successful");
					setFormData({
						fullNames: "",
						surname: "",
						gender: "",
						dateOfBirth: "",
						email: "",
						phoneNumber: "",
						password: "",
					});
				} else {
					toast.error("Registration failed");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				toast.error("Registration failed");
			});
	};

	return (
		<Template>
			<h1 style={{ textAlign: "center", marginTop: "3rem" }}>
				Registration Form
			</h1>
			<Form
				style={{ width: "50%", margin: "3.5rem auto" }}
				onSubmit={handleSubmit}
			>
				<Form.Group className="mb-3" controlId="formBasicFullName">
					<Form.Label style={{ fontWeight: "500" }}>Full Name</Form.Label>
					<Form.Control
						type="text"
						name="fullNames"
						value={formData.fullNames}
						placeholder="Enter your full name"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicLastName">
					<Form.Label style={{ fontWeight: "500" }}>Surname</Form.Label>
					<Form.Control
						type="text"
						name="surname"
						value={formData.surname}
						placeholder="Enter your surname"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicGender">
					<Form.Label style={{ fontWeight: "500" }}>Gender</Form.Label>
					<Form.Control
						as="select"
						name="gender"
						value={formData.gender}
						onChange={handleInputChange}
					>
						<option value="">Select Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicDateOfBirth">
					<Form.Label style={{ fontWeight: "500" }}>Date of Birth</Form.Label>
					<Form.Control
						type="date"
						name="dateOfBirth"
						value={formData.dateOfBirth}
						placeholder="Enter your date of birth"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label style={{ fontWeight: "500" }}>Email Address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						value={formData.email}
						placeholder="Enter email"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
					<Form.Label style={{ fontWeight: "500" }}>Phone Number</Form.Label>
					<Form.Control
						type="text"
						name="phoneNumber"
						value={formData.phoneNumber}
						placeholder="Enter Phone Number"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						value={formData.password}
						placeholder="Enter password"
						onChange={handleInputChange}
					/>
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
					Register
				</Button>
				<ToastContainer />
			</Form>
		</Template>
	);
};

export default RegistrationForm;
