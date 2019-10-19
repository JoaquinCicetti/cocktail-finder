import React from 'react';

import { useTheme } from '../../hooks';
import { Searcher, ToggleButton } from '../';
import { AnimatedList, Favorites } from '..';
import './App.scss';

const App: React.FC = () => {
    const { theme, Themes, toggleTheme } = useTheme();

    return (
        <div className={theme === Themes.dark ? 'theme-dark' : 'theme-light'}>
            <div className="container">
                <ToggleButton checked={theme === Themes.light} toggle={toggleTheme} />
                <Favorites />
                <Searcher />
                <AnimatedList />
            </div>
        </div>
    );
};

export default App;
