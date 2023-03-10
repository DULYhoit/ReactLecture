import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUser,setAge, plusNum} from "../redux/store";

const Cart = () => {
  let context1 = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  var num = 0;
  function num1(a) {
    num = Number(a);
    console.log(typeof num);
  }
  
  return (
    <div className="cart-container">
      <p>
        <strong style={{ fontSize: "30px" }}>{context1.user.name}({context1.user.age})</strong> 의
        장바구니
      </p>
      <div>
      <input type="text" onChange={(e)=>{num1(e.target.value)}}/>
      <button onClick={()=>{dispatch(setAge(num))}}>나이수정</button>
      </div>


      <Table striped bordered hover className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>

            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {context1.cart.map((item,index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(plusNum(item.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
