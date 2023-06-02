import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Template from "../components/Template";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
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
		fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.token) {
					// If login is successful, you can handle the token or perform any necessary actions
					toast.success("Login successful");
					navigate("/");
				} else {
					toast.error("Login failed. Please check your credentials.");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				toast.error("Login failed. Please try again later.");
			});
	};

	return (
		<Template>
			<h1 style={{ textAlign: "center", marginTop: "3rem" }}>Log In Form</h1>
			<Form
				style={{ width: "30%", margin: "3.5rem auto" }}
				onSubmit={handleSubmit}
			>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label style={{ fontWeight: "500" }}>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						value={formData.email}
						placeholder="Enter email"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						value={formData.password}
						placeholder="Password"
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
					Login
				</Button>
			</Form>
			<ToastContainer position="top-right" autoClose={3000} />
		</Template>
	);
};

export default Login;
