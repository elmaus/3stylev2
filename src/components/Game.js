import React, { useState, useRef, useEffect } from 'react';
import gameContext from './Context';
import LetterSelect from './Letterselect';
import RestartNext from './RestartNext';
import LookUp from './LookUp';
import useStock from './stock';
import data from './data';


export default function Game() {
    const [pair, setPair] = useState();
    const [word, setWord] = useState();
    const firstLetter = useRef('A');
    const [secondLetter, remaining, setSecondLetter] = useStock('B');
    const [reveal, setReveal] = useState(false);
    const [startRestart, setStartRestart] = useState('Start');

    useEffect(() => {
        setPair(firstLetter.current + secondLetter);
        setWord(data.pairs[firstLetter.current + secondLetter]);
        setReveal(false)
    }, [secondLetter]);
  
    return (
        <gameContext.Provider value={
            {
                firstletter: firstLetter,
                setsecondletter:(e, b) => setSecondLetter(e, b),
                startrestart:startRestart,
                setstartrestart:setStartRestart
            }
        }>
            <LookUp/>
            <h1>or Practice your Pairs</h1>
            <LetterSelect/>
            <h3>First Letter</h3>
            <div className="remaining">
                <h4>{remaining}</h4>
                <small>Remaining Letters:</small>
            </div>
            <h1 className="text-pair">{pair}</h1>
            <h2 className="text-word">{(reveal) ? word : "--"}</h2>
            <input className="btn-reveal" type='submit' onClick={() => setReveal(true)} value="Reveal"/>
            <RestartNext/>
            <small>{"&coppy 2021 - Samuel Camus"}</small>
        </gameContext.Provider>
    )
}