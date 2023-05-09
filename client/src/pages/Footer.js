import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
	return (
		<MDBFooter
			// bgColor=".bg-dark"
			className="text-center text-lg-start text-muted"
		>
			<section className="d-flex justify-content-center justify-content-lg-space-evenly p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<a
						href="https://www.facebook.com/douglasroadprimaryschool/"
						className="me-4 text-reset"
					>
						<MDBIcon fab icon="facebook-f" />
					</a>
					<a
						href="https://twitter.com/douglasroadps"
						className="me-4 text-reset"
					>
						<MDBIcon fab icon="twitter" />
					</a>
				</div>
			</section>

			<section className="">
				<MDBContainer className="text-center text-md-start mt-5">
					<MDBRow className="mt-3">
						<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<MDBIcon icon="gem" className="me-3" />
								Douglas Road Primary School
							</h6>
							<p>School Motto goes here!</p>
						</MDBCol>

						<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Registrations</h6>
							<p>
								<a href="./pages/TeacherForm" className="text-reset">
									Teacher Registration
								</a>
							</p>
							<p>
								<a href="./src/pages/Registraction.js" className="text-reset">
									Student Registration
								</a>
							</p>
							{/* <p>
								<a href="#!" className="text-reset">
									Vue
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Laravel
								</a>
							</p> */}
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
							<p>
								<a href="#!" className="text-reset">
									Newsletter
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Teacher Login
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Student Login
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Help
								</a>
							</p>
						</MDBCol>

						<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p>
								<MDBIcon icon="home" className="me-2" />
								63 Douglas Rd, Wynbergm, Cape Town, 7800
							</p>
							<p>
								<MDBIcon icon="envelope" className="me-3" />
								douglasroad.prim@wcgschools.gov.za
							</p>
							<p>
								<MDBIcon icon="phone" className="me-3" /> 021 797 9533
							</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>

			<div
				className="text-center p-4"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
			>
				© 2023 Copyright:
				<a
					className="text-reset fw-bold"
					href="https://douglasroadprimary.co.za"
				>
					Douglas Road Primary School
				</a>
			</div>
		</MDBFooter>
	);
}
