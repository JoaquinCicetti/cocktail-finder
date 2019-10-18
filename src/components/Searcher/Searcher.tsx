import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { search, clearCocktails } from './../../redux/actions';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';
import Icons from './Icons';
import './Searcher.scss';

type Transition = ({ from, to }: { from: number; to: number }) => any;
const morphTransition: Transition = ({ from, to }) =>
    tween({
        from: 0,
        to: 1,
        duration: 250,
    }).pipe(interpolate(from, to));
const Paths = {
    searching: {
        d: Icons.searching,
        transition: morphTransition,
    },
    clear: {
        d: Icons.clear,
        transition: morphTransition,
    },
};
const Icon = posed.path(Paths);

const App: React.FC = () => {
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
                <svg width="24" height="24" viewBox="-4 -24 100 100">
                    <Icon pose={filter ? 'clear' : 'searching'} />
                </svg>
            </button>
        </div>
    );
};

export default App;
