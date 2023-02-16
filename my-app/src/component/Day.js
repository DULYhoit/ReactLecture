

import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from './../hooks/useFetch';

const Day = () => {
    //dummy.words
    // const day = 1;
    const day = useParams().day;
    // const wordList = words.filter(word =>(
        //     word.day === Number(day)
        //     ))
        const words = useFetch(`http://localhost:3001/words?day=${day}`)




    return (
        <>
        <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}></Word>

                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;