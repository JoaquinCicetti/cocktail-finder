import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { search, clearCocktails } from './../../redux/actions';
import { MorphingIcon } from '../';
import './Searcher.scss';

const Searcher: React.FC = () => {
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const onSearcherChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        if (value.length > 2) dispatch(search(value));
        else if (!value.length) dispatch(clearCocktails());
        setFilter(value);
    };

    const clearSearcher = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        dispatch(clearCocktails());
        setFilter('');
        if (inputRef && inputRef.current !== null) inputRef.current.focus();
    };
    useEffect(() => {
        if (inputRef && inputRef.current !== null) inputRef.current.focus();
    }, []);
    return (
        <div className="searcher">
            <input
                placeholder="Search your favorite cocktail"
                value={filter}
                onChange={onSearcherChange}
                ref={inputRef}
            />
            <button title="Clear" className="clearButton" onClick={clearSearcher}>
                <MorphingIcon icon={filter ? 'clear' : 'searching'} />
            </button>
        </div>
    );
};

export default Searcher;
