import React, {useContext, useEffect, useState} from 'react';
import gameContext from './Context';
import data from './data';

const LetterSelect = () => {
    const value = useContext(gameContext);
    const [index, setIndex] = useState(0);

    const handleUp = () => {
        (index < 23) ? setIndex(index + 1) : setIndex(0)
    }
    const handleDown = () => {
        (index == 0) ? setIndex(23) : setIndex(index - 1)
    }

    useEffect(() => {
        let first = data.letterList[index];
        value.firstletter.current = first;
        value.setsecondletter(first, true)
    }, [index])


    return (
        <div className="row">
            <button className="btn-letterselect1" type="submit" onClick={() => handleDown()}><i class="fas fa-chevron-circle-left"></i>Previous Letter</button>
            <button className="btn-letterselect2" type="submit" onClick={() => handleUp()} >Next Letter<i class="fas fa-chevron-circle-right"></i></button>
        </div>
    )
}

export default LetterSelect;