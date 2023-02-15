import { useState } from "react";
import UserNamebyState from './UserNamebyState';


const State = ({age}) => {
    // let name = "Mike"
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인입니다" : "미성년자입니다.";
    
    //age값을 버튼을누를때마다 +1 하기위한 state
    // const [age , setAge] = useState(props.age);
    function changeName() {
        //삼항연산자
        // const newName = name === "Mike" ? "Jane" :"Mike";
        setName(name === "Mike" ? "Jane" :"Mike");
        // setAge(age + 1);
        
        
    }

    return ( 

        //기존의 자바스크립트는 값을바꾸려면 dom을 변경하는작업이필요함
        //h2에 id값을 name이라고 설정한뒤 document.getElementById("name").innertext = name;
        //리엑트에선 usestate를 사용한다 16.8버전부터는 훅을이용한 라이플사이클 관리가가능함
        //state는 컴포넌트가 중복으로 선언되어도 각컴포는트는 따로관리된다.
        <div>
            <h1>state</h1>
            <h2>{name} ({age}) : {msg}</h2>
            <UserNamebyState name={name}></UserNamebyState>
            <button onClick={changeName}>Change</button>
        </div>
     );
}
 
export default State;