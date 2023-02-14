//class 문법
// const Hello = function() {
//     <p>Hello</p>
// }
// export default Hello;

import World from "./World";
import styles from "./Hello.module.css"
//화살표 문법
const Hello = () => {
   return (
      <div>
         <h1>Hello</h1>
         <div className={styles.box}>Hello</div>

      </div>

   );
};
export default Hello;

//한줄 문법
// export default function Hello(){
//    return <p>Hello</p>
// }
