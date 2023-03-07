
import "./App.css";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./json/data";
import ItemComponent from './component/ItemComponent'


function App() {
  let [shoes] = useState(data);
 
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="nav-container">
        <Container>
          <Navbar.Brand href="#home" className="navbrand">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <ItemComponent items={shoes}/>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
