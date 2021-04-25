import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import '../modal.css'

function ViewMovieDescription(props) {

    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
        height: "390",
        width: "100%",
        aligns: "center",
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClose = () => {
        props.setShowParent(false);
    };

    useEffect(() => {
            movieTrailer(props.movie?.name || props.movie?.title || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            }).catch((error) => {
                console.log(error);
            })
    }, [props]);

    return (
        <Modal show={props.showParam} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title || props.movie.originalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-lg"><Youtube videoId={trailerUrl} opts={opts}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
    )
}

export default ViewMovieDescription
    