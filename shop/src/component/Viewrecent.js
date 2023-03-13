import { useState,useEffect } from "react";
const Viewrecent = (props) => {

  
  
  

  return (
    <div className="viewitem-container">
      <h4>최근본상품</h4>
      {props.viewnum.map((item) => {
      

        return (
          <div className="viewitem-box">
            <div>
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                alt=""
                style={{ width: "100px" }}
              />
            </div>
            <div className="viewitem-title">{props.shoes[item].title}</div>
            <div className="viewitem-content">{props.shoes[item].content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Viewrecent;
