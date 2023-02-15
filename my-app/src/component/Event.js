//class 문법
// const Hello = function() {
//     <p>Hello</p>
// }
// export default Hello;

import styles from "./Hello.module.css"
//화살표 문법
const Event = () => {

function showName() {
   console.log('Mike')
}
function showAge(age) {
   console.log(age)
}
function showText(text) {
   console.log(text)
}
   return (
    //event실행할때 값을넘겨주는방법
      <div>
         <h1>Hello</h1>
         <button onClick={showName}>show name</button>
         <button onClick={() => {
            showAge(30);
         }}>show age</button>
         <input type="text" onChange={e =>{
            const text = e.target.value;
            showText(text);
         }}/>

      </div>

   );
};
export default Event;

//한줄 문법
// export default function Hello(){
//    return <p>Hello</p>
// }
