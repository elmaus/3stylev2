import React, {useState, useRef, useEffect} from 'react';
import data from './data';

export default function LookUp() {
    const [letterPair, setLetterPair] = useState("");
    const [word, setWord] = useState("");


    useEffect(() => {
        let uppercasedLetter = letterPair.toUpperCase();
        setWord((letterPair.length == 2) ? data.pairs[uppercasedLetter] : "Enter the Two Letters");
    })

    return (
        <div>
            <h1>{word}</h1>
            <input className="letter-input" type="text" onChange={(e) => setLetterPair(e.target.value)} />
        </div>
    )
}