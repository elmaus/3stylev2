import {useState} from 'react';
import data from './data';

const useStock = (initialValue) => {
    const [stock, setStock] = useState([...data.letterList]);
    const [letter, setLetter] = useState(initialValue);
    const [firstLetter, setFirstLeter] = useState('A');

    const getLetter = (first, restock) => {
        setFirstLeter(first)
        let temporaryStock = (restock) ? [...data.letterList] : [...stock]
        let secondLetter = temporaryStock[Math.floor(Math.random() * temporaryStock.length)];

        if (temporaryStock.length > 0) {
            while (secondLetter === first) {
                secondLetter = temporaryStock[Math.floor(Math.random() * temporaryStock.length)];
            }
            setLetter(secondLetter);
            setStock([...temporaryStock.filter((v) => v !==secondLetter)]);
        }
    };

    return [letter, stock.length, getLetter]
}

export default useStock;