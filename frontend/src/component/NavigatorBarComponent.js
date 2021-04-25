import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import Movie from '../images/Book_icon_1.png';
import {Link} from 'react-router-dom';

function NavigationBarComponent() {

    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Link className="navbar-brand" to={""}>
                <img src={Movie} width="25" height="25" alt="Brand" />
                Movie Shop
            </Link>
            <Nav className="mr-auto">
                <Link to={"add"} className="navbar-brand"> Add Movie</Link>
                <Link to={"list"} className="navbar-brand"> Movie List</Link>                    
            </Nav>
        </Navbar>
        </div>
    )

}
  
export default NavigationBarComponent;