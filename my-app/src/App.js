
import './App.css';
import styles from "./App.module.css"
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import World from './component/World';

//component는 다른곳에서 js를 만든후 import해서 사용가능
//css 적용: 1. 인라인 스타일 style값은 객체속성으로  속성값은 카멜케이스로
//css 모듈화 import styles from "./Hello.module.css"
function App() {
  return <div>
    <Hello></Hello>
    <div className={styles.box}>App</div>
    
   
  </div>;
}

export default App;
