import React from 'react';
import { useSelector } from 'react-redux';
import * as ListReducer from './../../interfaces/ListReducer';
import './CocktailList.scss';

const CocktailList: React.FC = () => {
    const { list, status } = useSelector((state: ListReducer.State) => ({
        list: state.list,
        status: state.status,
    }));
    return (
        <div className="searcher">
            {status}
            {list.map(item => {
                return (
                    <div className="drink" key={item.idDrink}>
                        <img alt={item.strDrink} src={item.strDrinkThumb} />
                        <p>{item.strDrink}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default CocktailList;
