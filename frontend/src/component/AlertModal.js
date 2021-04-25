import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function AlertModal(props) {

    const handleClose = () => {
        console.log("params.movieId => " + props.movie.id);
        props.setShowAlert(false);
    };

    return (
        <div>
        <Modal show="true">
            <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.messageBody}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
                Close
            </Button>
            <Button variant="primary" onClick={() => props.execFunction(props.movie.id)}>
                {props.action}
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
  

}

export default AlertModal

