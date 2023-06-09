import React, { useEffect, useRef } from "react";
import { Button, Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function NavBar() {
	const headerRef = useRef(null);
	const menuRef = useRef(null);

	const stickyHeaderFunc = () => {
		if (
			document.body.scrollTop > 80 ||
			document.documentElement.scrollTop > 80
		) {
			headerRef.current.classList.add("sticky_header");
		} else {
			headerRef.current.classList.remove("sticky_header");
		}
	};

	const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

	useEffect(() => {
		const handleScroll = () => {
			stickyHeaderFunc();
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header ref={headerRef} className="w-full h-80px d-flex align-items-center">
			<div className="container">
				<div className="d-flex justify-content-between">
					{/* Logo */}
					{/* Logo end */}
					{/* Menu Start */}
					<div ref={menuRef} className="menu">
						<Navbar expand="lg" className="p-0 background grey">
							<Container>
								<Navbar.Brand className="mr-auto" href="/">
									Douglas Road Primary School
								</Navbar.Brand>
								<Navbar.Toggle
									aria-controls="basic-navbar-nav"
									className="border-0"
								/>
								<Navbar.Collapse
									id="basic-navbar-nav"
									className="justify-content-center"
									fluid="md"
								>
									<Nav className="mr-auto">
										<Nav.Link
											className="text-black font-weight-600"
											href="/info"
										>
											School Info
										</Nav.Link>
										<Nav.Link className="text-black font-weight-600" href="#">
											Student Info
										</Nav.Link>
										<Nav.Link
											className="text-black font-weight-600"
											href="/newsletter"
										>
											NewsLetter
										</Nav.Link>
										<Nav.Link
											className="text-black font-weight-600"
											href="/donation"
										>
											Donation
										</Nav.Link>
										<NavDropdown
											title="Register"
											id="navbarScrollingDropdown"
											className="text-black font-weight-600"
											href="#"
										>
											<Nav.Link
												onClick={() =>
													(window.location.href = "/admin/teacher-registration")
												}
												onMouseOver={(e) =>
													(e.target.style.backgroundColor = "#ccc")
												}
												onMouseOut={(e) =>
													(e.target.style.backgroundColor = "transparent")
												}
											>
												Register a teacher
											</Nav.Link>
											<Nav.Link
												onClick={() =>
													(window.location.href = "/student-registration")
												}
												onMouseOver={(e) =>
													(e.target.style.backgroundColor = "#ccc")
												}
												onMouseOut={(e) =>
													(e.target.style.backgroundColor = "transparent")
												}
											>
												Register a student
											</Nav.Link>
										</NavDropdown>
										<Nav.Link
											className="text-black font-weight-600"
											href="/teacher/profile"
										>
											Teacher profile
										</Nav.Link>
										<Nav.Link className="" href="/login">
											<Button onClick={toggleMenu} variant="outline-dark">
												Login
											</Button>
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</div>
					{/* Menu End */}

					{/* Menu Right */}
					<div className="d-flex align-items-center gap-4">
						<Container
							onClick={toggleMenu}
							onKeyDown={toggleMenu}
							className="text-2xl text-smallTextColor d-md-none cursor-pointer"
						>
							<i className="ri-menu-line"></i>
						</Container>
					</div>
				</div>
			</div>
		</header>
	);
}

export default NavBar;
