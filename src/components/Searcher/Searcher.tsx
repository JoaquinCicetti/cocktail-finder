import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search, clearCocktails } from './../../redux/actions';
import './Searcher.scss';

const App: React.FC = () => {
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();

    const onSearcherChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        if (value.length > 2) dispatch(search(filter));
        setFilter(value);
    };

    const clearSearcher = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        dispatch(clearCocktails());
        setFilter('');
    };
    return (
        <div className="searcher">
            <input value={filter} onChange={onSearcherChange} />
            {filter && <button onClick={clearSearcher}>x</button>}
        </div>
    );
};

export default App;
