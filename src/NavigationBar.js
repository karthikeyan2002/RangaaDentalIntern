import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}
	a,
	.navbar-nav,
	.navbar-light .nav-link {
		color: #9fffcb;
		&:hover {
			color: white;
		}
	}
	.navbar-brand {
		font-size: 1.4em;
		color: #9fffcb;
		&:hover {
			color: white;
		}
	}
	.form-center {
		position: absolute !important;
		left: 1%;
		right: 70%;
	}
`;
const NavigationBar = () => (
	<Styles>
		<Navbar expand='lg'>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Item>
						<Link to='/'>Dashboard</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to='/Receptionist'>Receptionist</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to='/Nurse'>Nurse</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to='/Doctor'>Doctor</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to='/Medical'>Medical</Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
);
export default NavigationBar;
