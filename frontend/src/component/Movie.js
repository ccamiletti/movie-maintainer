import React, {useState} from 'react';
import {Card, Form, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave} from '@fortawesome/free-solid-svg-icons'
import GenreDropDown from './GenreDropDown'

const Movie = () => {

    const [movie, setMovie] = useState({name:"", category:"", year:"", image:""});

    const submitHandler = () => {
        console.log(movie);
    } 

    function onChangeGenre(value) {
        console.log(value);
    }

    return (
        <div>
        <Card className="border border-dark bg-dark text-white">
            <Card.Header>Add Book</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Movie</Form.Label>
                        <Form.Control type="text" placeholder="Enter name of the movie" onChange={e => setMovie({...movie, name: e.target.value})} value={movie.name}/>
                        <Form.Text className="text-muted">
                        e.g: The lord of the rings
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Action, Aventure, Horror..." onChange={e => setMovie({...movie, category: e.target.value})} value={movie.category}/>
                    </Form.Group>
                    <Form.Group controlId="year">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" placeholder="year of the movie" onChange={e => setMovie({...movie, year: e.target.value})}/>
                    </Form.Group>
                    <Form.Group controlId="urlImage">
                        <Form.Label>Url Image</Form.Label>
                        <Form.Control type="text" placeholder="https://...." onChange={e => setMovie({...movie, image: e.target.value})}/>
                    </Form.Group>
                    <Form.Group controlId="genre">
                        <Form.Label>Genre</Form.Label>
                        <GenreDropDown onChangeGenre={onChangeGenre}/>
                    </Form.Group>
                    <Button onClick={submitHandler}> <FontAwesomeIcon icon={faSave}/> Submit</Button>
                </Form>
            </Card.Body>
        </Card>
        </div>
    );

}

export default Movie;