import React from 'react';
import { Searcher, CocktailList } from '../';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <Searcher />
            <CocktailList />
        </div>
    );
};

export default App;
