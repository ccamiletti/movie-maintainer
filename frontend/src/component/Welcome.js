import React from 'react';
import {Jumbotron} from 'react-bootstrap'

const Welcome = () => {

    return (
        <Jumbotron className="bg-dark text-white">
              <h1>Welcome to HuisFlix !!!</h1>
              <blockquote className="blockquote mb-0">
                  <p>
                      Good movies, series, documentaries...
                  </p>
                  <footer className="blockquote-footer">
                      Carlo Camiletti
                  </footer>
              </blockquote>
        </Jumbotron>
    );

}

export default Welcome;