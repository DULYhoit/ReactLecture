import dummy from '../db/data.json'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word';

const Day = () => {
    //dummy.words
// const day = 1;
const day = useParams().day;
const wordList = dummy.words.filter(word =>(
    word.day === Number(day)
    ))


    return (
        <>
        <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id}></Word>

                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;