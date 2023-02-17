
import { useState } from 'react';
const P_Word = (props) => {
  const day = Number(props.day);
    const words = [
    {
      id: 1,
      day: 1,
      eng: "book",
      kor: "책",
      isDone: true,
    },
    {
      id: 3,
      day: 2,
      eng: "pen",
      kor: "펜",
      isDone: false,
    },
    {
      id: 4,
      day: 2,
      eng: "school",
      kor: "학교",
      isDone: false,
    },
    {
      id: 5,
      day: 3,
      eng: "pencil",
      kor: "연필",
      isDone: false,
    },
    {
      day: 3,
      eng: "window",
      kor: "창문",
      isDone: false,
      id: 6,
    },
    {
      day: 1,
      eng: "hello",
      kor: "안녕",
      isDone: false,
      id: 7,
    },
  ];
  
  const filter = words.filter(word_ => (
    word_.day === day
  ))

  
 

  return (
    <>
      {filter.map((word) => (
        <tr>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>{word.kor}</td>
          <td>{word.eng}</td>
          <td>
            <button>뜻보기</button>
            <button className="btn_del">삭제</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default P_Word;
