import { useState } from 'react';
const LecState = () => {
    // let name = "Mike";
    const[name,setName] = useState("Mike");

    function changeName() {
        //삼항연산자
        //현재 name의 속성값은 계속변하지만 dom업데이트가
        //실행되지않아 화면상에는 안바뀜
        //바닐라 자바스크립트 : document.getElementById("name").innerText = name;
        const newname = name === "Mike" ? "Jane" : "Mike";
        console.log(name);
        setName(newname);
        
    }

    return ( 
        <div>
            <h1>State</h1>
            <h2 id="name">속성값 : {name}</h2>
            <button onClick={changeName}>이름바꾸기</button>
        </div>
     );
}
 
export default LecState;