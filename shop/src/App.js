import "./App.css";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import data from "./json/data";
import Item from "./component/Item";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./component/Detail";
import About from "./component/About";
import Event from "./component/Event";
import axios from "axios";
import Cart from "./component/Cart";


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [btncount, setBtncount] = useState(2);
  let [btnsetup, setBtnsetup] = useState(true);
  let [viewloading, setViewloading] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('watched') == null){
      localStorage.setItem('watched',JSON.stringify([]))
    }

    
  },[])
  

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
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              장바구니
            </Nav.Link>
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
              {viewloading == true ? <h4>로딩중.....</h4> : null}
              {btnsetup == true ? (
                <button
                  onClick={() => {
                    setViewloading(true);
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${btncount}.json`
                      )
                      .then((result) => {
                        setBtncount(btncount + 1);
                        let copy = [...shoes, ...result.data];
                        //버튼을 눌렀을때 상품목록이있다면
                        //카피해온 배열의 아이디값에 result로뽑아온 데이터가 있느냐?
                        //

                        // for (let i = 0; i < result.data.length; i++) {
                        //   let check = copy.find(function (data) {
                        //     return data.id == result.data[i].id;
                        //   });
                        //   console.log(check);
                        //   if (check == undefined) {
                        //     copy.push(result.data[i]);
                        //   } else {
                        //     alert("찾으시는상품이 끝입니다");
                        //     break;
                        //   }
                        // }

                        setShoes(copy);
                        setViewloading(false);
                      })
                      .catch(() => {
                        alert("상품이 없습니다.");
                        setBtnsetup(false);
                        setViewloading(false);
                      });
                    //두개의 ajax요청을 동시에 하고싶다면 promiss
                    //Promise.all([axios.get('/url1'),axios.get('/url2')]).then(()=>{
                    // })
                    //ajax 는 문자만 통신 가능
                  }}
                >
                  ajax
                </button>
              ) : null}
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart></Cart>}/>

        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>로케이션</div>} />
        </Route>

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
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
