import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../image.css'

function ViewImage(props) {

    const handleClose = () => {
        props.setShowParent(false);
    };

    return (
      <div>
        <Modal show={props.showParam} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title || props.movie.originalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row_posters"><img className="posterLarge"  src={props.movie.posterPath} alt=""/></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
      </div>  
    )
}

ViewImage.propTypes = {

}

export default ViewImage

