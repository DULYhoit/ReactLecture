//함수로 이벤트를 거는방법
//함수를 만들고 태그에 상황별 이벤트함수를 건다
function showName() {
    console.log('Mike');
}
function showAge() {
    console.log(30)
}
function showText(txt) {
    console.log(txt)
}
const LecEvent = () => {
  return (
    <div>
      <span>
        <h1>이벤트 함수 걸기</h1>
        <h2>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</h2>
      </span>

      <button onClick={showName}>Show name</button>
      <button onClick={showAge}>Show age</button>
      <br />
      <input type="text" onChange={(e) => {
        const txt = e.target.value;
        showText(txt);
      }}/>
    </div>
  );
};

export default LecEvent;
