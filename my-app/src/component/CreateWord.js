import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from './../hooks/useFetch';

const CreateWord = () => {
    const days = useFetch('http://localhost:3001/days');
    //useHistory();는 페이지로 돌아가고싶을때 쓰는 함수
    const history = useHistory();

    function onSubmit(event) {
        event.preventDefault();

        fetch(`http://localhost:3001/words/`, {
            //fetch의 두번째인자는 요청의 옵션을의미함
            //POST
            //GET
            //PUT
            //DELETE
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false,
            }),
        })
            .then(res => {
                if (res.ok) {
                    alert("추가되었습니다.")
                    history.push(`day/${dayRef.current.value}`)
                }
            })
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form action="" onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}

                </select>
            </div>
            <button>저장</button>

        </form>
    );
}

export default CreateWord;