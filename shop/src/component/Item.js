import { Link } from "react-router-dom";

const Item = (props) => {
    
  return props.items.map((data,index) => (
    <div className="col-md-4">
      <Link to={`/detail/${index}`}>
      <img src={'https://codingapple1.github.io/shop/shoes'+(index+1)+'.jpg'} width="80%" />
      </Link>

     
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>{data.price}원</p>
    </div>
  ));
};

export default Item;
