import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import NavigationBarComponent from './component/NavigatorBarComponent'
import Welcome from './component/Welcome'
import Footer from './component/Footer'
import Book from './component/Movie'
import MovieList from './component/MovieList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (
    <Router className="app">
      <NavigationBarComponent/>
      <Container>
        <Row>
          <Col lg={12} className="app_col">
            <Switch>
              <Route path="/" exact component={Welcome}></Route>
              <Route path="/add" exact component={Book}></Route>
              <Route path="/list" exact component={MovieList}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
