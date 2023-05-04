import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Registraction = () => {
  return (
    <> <h1 style={{ textAlign:"center",marginTop:"50px" }}>Registraction Form</h1>
    <Form style={{ width:"500px",margin:"100px auto" }}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{ fontWeight:"500" }}>FIrst Name</Form.Label>
      <Form.Control type="email" placeholder="Enter First Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{ fontWeight:"500" }}>Last Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Last Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{ fontWeight:"500" }}>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{ fontWeight:"500" }}>Date of Birth</Form.Label>
      <Form.Control type="password" placeholder="" />
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{ fontWeight:"500" }}>Gender</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{ fontWeight:"500" }}>Password</Form.Label>
      <Form.Control type="password" placeholder="" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" style={{ width:"500px",backgroundColor:"#0F172A",border:"none",height:"50px" }}>
      Registraction
    </Button>
  </Form></>
  );
};

export default Registraction;