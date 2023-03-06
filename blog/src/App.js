import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";

  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자코트추천",
    "남자 반바지 추천",
  ]);
  let [month, setMonth] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  let [day, setDay] = useState([1, 2, 3]);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function click() {
    for (let i = 0; i < count.length; i++) {
    console.log('정상');
      
      let copy = [...count]
      copy[i] += 1;
      setCount(copy);
      
    }
  }
  function detail() {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  }
  function solt(e) {
    let copy = [...title];
    copy.sort();
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "20px" }}>블로그임</h4>
      </div>
      <div>
        <button onClick={solt}>가나다순 정렬</button>
      </div>
      {/* <div className="list">
        <h4><span onClick={detail}>{title[0]}</span> <span onClick={click}>👍</span> {count} </h4>
        <p>{month[0]}월 {day[0]}일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{month[1]}월 {day[0]}일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>{month[2]}월 {day[0]}일 발행</p>
      </div> */}
      {title.map(function (a,i) {
        return (
          <div key={i} className="list">
            <h4>
              <span onClick={detail}>{a}</span>
              <span onClick={click}>👍</span> {count[i]}
            </h4>
            <p>
              {month[0]}월 {day[0]}일 발행
            </p>
          </div>
        );
      })}

      {modal == true ? <Modal></Modal> : null}
    </div>
  );
}
const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
