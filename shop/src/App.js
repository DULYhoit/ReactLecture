import "./App.css";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./json/data";
import Item from "./component/Item";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./component/Detail";
import About from "./component/About";
import Event from "./component/Event"

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="nav-container">
        <Container>
          <Navbar.Brand href="#home" className="navbrand">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto nav">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              홈으로
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  <Item items={shoes}/>
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
          
       
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>멤버</div>}/>
          <Route path="location" element={<div>로케이션</div>}/>
        </Route>

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>

        <Route
          path="*"
          element={<div style={{ fontSize: "40px" }}>404</div>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
