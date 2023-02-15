import State from './State';

//태그 속성값에 변수와 값을 보내줄수있음 a={value} 그럼 받는쪽 함수에서 props 로 꺼내면됨
const Props = () => {
    return ( 
        <div>
            <h3>props : properties</h3>
            <State age={15}></State>
            <State age={20}></State>
            <State age={25}></State>
        </div>
     );
}
 
export default Props;