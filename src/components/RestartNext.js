import React, {useContext, useRef} from 'react';
import gameContext from './Context';

export default function RestartNext() {
    const value = useContext(gameContext);
    const btnNext = useRef();

    const handleNext = () => {
        if (value.startrestart == 'Refresh') {
            value.setsecondletter(value.firstletter.current, false)
        }
    }
    const handleStart = () => {
        if (value.startrestart == 'Start') value.setstartrestart('Refresh');
        value.setsecondletter(value.firstletter.current, true);
    }

    return (
        <div className='row'>
            <input className="btn-start" onClick={handleStart} type="submit" value="Refresh"/>
            <input className="btn-next" ref={btnNext} type='submit' onClick={handleNext} value='Next'/>
        </div>
    )
}