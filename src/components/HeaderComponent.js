import React, { Component } from "react";
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap"; // Example of name import
import { NavLink } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	render() {
		return (
			<React.Fragment>
				<Jumbotron fluid>
					<div className="container">
						<div className="row">
							<div className="col-4 col-sm-3 col-md-2 align-self-center">
								<img src="/assets/images/Logo3.png" className="img-fluid" alt="Blob Logo" />
							</div>
							<div className="col">
								<h1>BLOB</h1>
								<h2>A Lifestyle Choice</h2>
							</div>
						</div>
					</div>
				</Jumbotron>

				<Navbar dark sticky="top" expand="md">
					<div className="container">
						<NavbarBrand className="mr-auto" href="/">
							<img src="/assets/images/Logo3.png" height="30" width="30" alt="Blob Logo" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<i className="fa fa-home fa-lg" /> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/blobdad">
										<i className="fa fa-child fa-lg" /> Blob dad
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/merch">
										<i className="fa fa-shopping-bag fa-lg" /> Merchhh
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contactus">
										<i className="fa fa-address-card fa-lg" /> Contact Us
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Header;
