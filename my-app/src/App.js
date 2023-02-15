
import './App.css';
import styles from "./App.module.css"
import Event from './component/Event';
import State from './component/State';
import Props from './component/Props';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';






//component는 다른곳에서 js를 만든후 import해서 사용가능
//css 적용: 1. 인라인 스타일 style값은 객체속성으로  속성값은 카멜케이스로
//css 모듈화 import styles from "./Hello.module.css"
//라우팅 구현을위import EmptyPage from './component/EmptyPage';
// 한 라우팅설치 npm install react-router-dom
//route는 해당페이지로 이동했을때 보여주는 범위를 한정할수있다
//공부목적으로 백엔드 단을 만들고싶다면 json server설치 
//npm install -g json-server
//json server실행 : json-server --watch ./src/db/data.json --port 3001 경로와 포트번호 안겹치는걸로




function App() {
  return (
  <BrowserRouter>
  <div>
      <Header />
      <Switch>
        <Route exact path='/'>
        <DayList />
        </Route>
        <Route path='/day/:day'>
        <Day />
        </Route>
        <Route>
          <EmptyPage></EmptyPage>
        </Route>


      </Switch>

  </div>
    </BrowserRouter>


);
}

export default App;
