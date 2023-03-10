import { useContext, useEffect, useState } from "react";
import { InputGroup, Form, Button, Nav, } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar"
import Tabcontent from "./Tabcontent";
import { useDispatch, useSelector } from "react-redux";
import { setUser,setAge} from "../redux/store";
import { gocart } from "../redux/store";

const Detail = (props) => {
  let { id } = useParams();
  let [alertdiscount, setAlertdiscount] = useState(true);
  let [num, setNum] = useState("");
  let [tab,setTab] = useState(0);
  let [fade,setFade] = useState('');
  
  let context1 = useSelector((state)=>{
    return state
  });
  let dispatch = useDispatch();

  useEffect(() => {
    //어려운연산
    //서버에서 데이터가져오는 작업
    //타이머 장착하는거
    // console.log("useEffect는 렌더링이 끝난후 실행");
    let timer = setTimeout(() => {
      setAlertdiscount(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자가아닙니다.");
      document.querySelector(".count-btn").value = "";

     
    }
  }, [num]);

  useEffect(()=>{
    //리엑트 18버전 이후에 추가된 automatic batching 기능
    //스테이트 변경한 함수들이 근처에있으면 하나로 합쳐서 한번만 바꿔줌
    //스테이트 변경이 마지막으로 끝나면 재렌더링
    //결론은 return이 먼저실행되고 setFade('end')가 실행
    setTimeout(() => {
      setFade('end');
    }, 10);
    
    return()=>{
      setFade(''); 
    }

  },[tab])

  if (id != props.shoes.length) {
    var finding = props.shoes.find(function (x) {
      return x.id == id;
    });
    var url =
      "https://codingapple1.github.io/shop/shoes" + (finding.id + 1) + ".jpg";
  }

  if (id != props.shoes.length) {
    return (
      <div className="container">
        {alertdiscount == true ? (
          <div className="alert alert-warning">5초이내 구매시 할인</div>
        ) : null}
        <div className="row">
          <div className="col-md-6">
            <img src={url} width="100%" />
          </div>

          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[finding.id].title}</h4>
            <p>{props.shoes[finding.id].content}</p>
            <p>{props.shoes[finding.id].price}원</p>
            <InputGroup
              className="mb-3 buy-count"
              style={{ width: "300px", margin: "0 auto" }}
            >
              <Form.Control
                placeholder="수량"
                aria-label="수량"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setNum(e.target.value);
                }}
                className="count-btn"
              />
            </InputGroup>
            <button className="btn btn-danger" onClick={()=>{dispatch(gocart(props.shoes[finding.id]))}}>주문하기</button>
          </div>
        </div>
        <Navbar setTab={setTab}></Navbar>
        <Tabcontent tab={tab} fade={fade}></Tabcontent>
      </div>
    );
  } else {
    return (
      <div>
        <h4>404</h4>
      </div>
    );
  }
};

export default Detail;
