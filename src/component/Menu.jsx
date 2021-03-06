import React from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import logo from '../asset/img/react3.png';
import {connect} from "react-redux";
import * as loginActions from '../action/loginActions'

const Menu = ({logout}) => {
    return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img width="112px" src={logo} alt="logo"/></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/service">Service</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <button className="btn btn-outline-info m-2">Search</button>
                <button onClick={logout} className="btn btn-outline-info">Logout</button>
            </Form>
        </Navbar>
    );
};
export default connect(state => ({
        isAuthenticated: state.loginReducer.isAuthenticated
    }), {logout: loginActions.logout}
)(Menu);