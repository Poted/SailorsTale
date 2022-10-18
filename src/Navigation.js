import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './Nav.css';

export class Navigation extends Component{

    render(){
        return(
            <Navbar className='nav-container' expand="lg" fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" bg="dark" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='nav'>
                        <NavLink className="nav-item d-inline p-2 px-5 bg-dark text-white" to="/">
                            Enter
                        </NavLink>

                        <NavLink className="nav-item d-inline p-2 px-5 bg-dark text-white" to="/department">
                            Character
                        </NavLink>
                        
                        <NavLink className="nav-item d-inline p-2 px-5 bg-dark text-white" to="/employee">
                            Ship
                        </NavLink>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}