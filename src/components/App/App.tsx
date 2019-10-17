import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '../../hooks';
import { Searcher, ToggleButton } from '../';
import { AnimatedList } from '..';
import './App.scss';
import * as ListReducer from '../../interfaces/ListReducer';

const App: React.FC = () => {
    const { theme, Themes, toggleTheme } = useTheme();
    const { list, status } = useSelector((state: ListReducer.State) => ({
        list: state.list,
        status: state.status,
    }));
    return (
        <div className={theme === Themes.dark ? 'theme-dark' : 'theme-light'}>
            <div className="container">
                <ToggleButton checked={theme === Themes.light} toggle={toggleTheme} />
                <Searcher />
                <AnimatedList list={list} status={status} />
            </div>
        </div>
    );
};

export default App;
