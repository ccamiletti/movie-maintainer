import React, {useState, useEffect} from 'react';
import {Card, Table} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import requests from '../requests'
import Button from 'react-bootstrap/Button'
import ViewMovieDescription from './ViewMovieDescription'
import AlertModal from './AlertModal'
import ViewImage from './ViewImage'
import Pagination from './Pagination'
import SearchBar from './SearchBar'

const MovieList = () => {

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [filter, setFilter] = useState("");
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0)

    async function getMovies() {
        const response = await axios.get(requests.getActionMovies+'&page='+offset+'&filterTitle='+filter)
        console.log(response);
        setMovies(response.data.results);
        setPageCount(response.data.totalPages)
    };

    useEffect(() => {
        getMovies();
    }, [offset, filter]);

    function showAlertHandle(movie) {
        setMovie(movie);
        setShowAlert(true);
    }

    function handleShowImage(movie) {
        setShowImage(true);
        setMovie(movie);
    }

    const handleShow = (movie) => {
        setShow(true);
        setMovie(movie);
    };

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage)
    };

    const setKeyword = (e) => {
        setFilter(e);
    }
    
    const updateMovie = (movie) => {

    }

    const removeMovie = (movieId) => {
        console.log("removing movie with ID => " + movieId)
        axios.delete(requests.removeMovie + movieId).then(response => {
            console.log("movie with id: " + movieId + " was removed")
            setShowAlert(false);
            getMovies();
        }).catch(e => {
            console.log("errorrorororr");
        })
    }

    return (
        <div>
        <Card className="border border-dark bg-dark text-white">
            <Card.Header>
                <FontAwesomeIcon icon={faList}/> Book List
            </Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>        
                        <tr>
                            <th>
                                <SearchBar setKeyword={setKeyword}/>
                            </th>
                            <th colSpan="5">
                            </th>
                        </tr>
                        <tr>
                        <th>Title</th>
                        <th>Vote Average</th>
                        <th>Category</th>
                        <th>Trailer</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => (
                            <tr align="center" key={movie.id}>
                                <td>{movie.title || movie.originalTitle}</td>
                                <td>{movie.voteAverage}</td>
                                <td><a href="#" onClick={() => handleShowImage(movie)}>see image</a></td>
                                <td><Button variant="primary" onClick={() => handleShow(movie)}>view trailer</Button></td>
                                <td><Button variant="info" onClick={() => updateMovie(movie)}>Update</Button></td>
                                <td><Button variant="danger" onClick={() => showAlertHandle(movie)}>Remove</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination handlePageClick={handlePageClick} pageCount={pageCount}/>
            </Card.Body>
            {show && <ViewMovieDescription showParam={show} setShowParent={setShow} movie={movie}/>}
            {showImage && <ViewImage showParam={showImage} setShowParent={setShowImage} movie={movie}/>}
            {showAlert && <AlertModal messageBody="Are you sure to remove movie?" 
                                    execFunction={removeMovie} 
                                    action="Remove" 
                                    title="Remove movie" 
                                    movie={movie}
                                    setShowAlert={setShowAlert}/>}

        </Card>
        </div>
    )
}

export default MovieList;