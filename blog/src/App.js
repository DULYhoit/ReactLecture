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
  let[titleNum,setTitleNum] = useState(0);
  let [month, setMonth] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  let [day, setDay] = useState([1, 2, 3]);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [text,setText] = useState('');
  
  function click(i) {
    console.log(i);
    let copy = [...count];

    copy[i] += 1;

    setCount(copy);
  }
  function change(a) {
    setTitle(a);
  }
  function deltext(i) {
    let copy = [...title];
    copy.splice(i,1);
    setTitle(copy);
    
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
      {title.map(function (a, i) {
        return (
          <div key={i} className="list">
            <h4>
              <span onClick={() => {detail();setTitleNum(i);}}>{a}</span>
              <span onClick={()=>{click(i)}}>👍</span> {count[i]}
              <button style={{marginLeft : '20px'}} onClick={() => {
                deltext(i);
              }}>삭제</button>
            </h4>
            
             
            <p>
              {month[i]}월 {day[i]}일 발행
            </p>
          </div>
        );
      })}
      <div>
      <input onChange={(e) => {
        e.stopPropagation();
        setText(e.target.value);
        console.log(text);
      }}/>
      <button onClick={() => {
        let copy = [...title];
        copy.push(text)
        setTitle(copy);
        let copy1 = [...count];
        copy1.push(0);
        setCount(copy1);
      }}>추가</button>
      </div>


      

      {modal == true ? <Modal titleNum={titleNum} title={title} change={change}></Modal> : null}
    </div>
  );
}
const Modal = (props) => {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[props.titleNum]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {props.change(['여자코트추천','남자 코트추천','남자 반바지추천'])}}>글수정</button>
    </div>
  );
};

export default App;
