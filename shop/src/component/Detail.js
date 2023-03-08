import { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let [alertdiscount, setAlertdiscount] = useState(true);
  let [num,setNum] = useState('');
  useEffect(() => {
    //어려운연산
    //서버에서 데이터가져오는 작업
    //타이머 장착하는거
    // console.log("useEffect는 렌더링이 끝난후 실행");
    let timer = setTimeout(() => {
      setAlertdiscount(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(()=>{
    
    if(isNaN(num) == true){
      alert('숫자가아닙니다.')
      document.querySelector('.count-btn').value = null;
      
    console.log('숫자가아닙니다');
  }
 
},[num])
    

    
    

  if (id != props.shoes.length) {
    var finding = props.shoes.find(function (x) {
      return x.id == id;
    });
    var url =
      "https://codingapple1.github.io/shop/shoes" + (finding.id + 1) + ".jpg";
  }

  if (id != props.shoes.length) {
    return (
      <div className="container">
        {alertdiscount == true ? (
          <div className="alert alert-warning">5초이내 구매시 할인</div>
        ) : null}
        <div className="row">
          <div className="col-md-6">
            <img src={url} width="100%" />
          </div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
           onChange={(e) => {setNum(e.target.value)}} className='count-btn'/>
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>

          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[finding.id].title}</h4>
            <p>{props.shoes[finding.id].content}</p>
            <p>{props.shoes[finding.id].price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h4>404</h4>
      </div>
    );
  }
};

export default Detail;
