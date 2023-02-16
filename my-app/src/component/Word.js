
import { useState } from 'react';
const Word = ({word: w}) => {
    const [word, SetWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setisDone] = useState(word.isDone);
    function toggleShow() {
        setIsShow(!isShow);
    }
    function toggleDone() {
        // setisDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`,{
            //fetch의 두번째인자는 요청의 옵션을의미함
            //POST
            //GET
            //PUT
            //DELETE
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            }),
        })
        .then(res => {
            if(res.ok){
                setisDone(!isDone);
            }
        })
                
        
    }

    function del() {
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method : 'DELETE',
            }).then(res => {
                if(res.ok){
                    SetWord({id:0})
                }
            })
        }
    }

    if(word.id === 0){
        return null;
    }
        
       
        

    return (
        <>
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" checked={isDone}
                onChange={toggleDone}/>
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow?"숨기기":"보기"}</button>
                <button onClick={del} className='btn_del'>삭제</button>
            </td>

        </tr>
        </>
    );
}

export default Word;