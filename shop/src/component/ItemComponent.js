const ItemComponent = (props) => {
    
  return props.items.map((data,index) => (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+(index+1)+'.jpg'} width="80%" />
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>{data.price}원</p>
    </div>
  ));
};

export default ItemComponent;
