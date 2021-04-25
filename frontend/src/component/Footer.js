import React from 'react';
import {Navbar, Container, Col} from 'react-bootstrap'


const Footer = () => {

    function getCurrentDate() {
        return new Date().getFullYear();
    }

    return(
        <div>
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg="12" className="text-center text-muted">
                    <div>{getCurrentDate()}, All rigths reserved by CCS company</div>
                </Col>
            </Container>
        </Navbar>    
        </div>
    );

}

export default Footer;