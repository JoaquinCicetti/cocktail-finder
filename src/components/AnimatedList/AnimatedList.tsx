import React, { forwardRef, useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Info } from '../';
import { Cocktail } from '../../interfaces/Cocktail';
import './AnimatedList.scss';

interface Props {
    status: string;
    list: Array<Cocktail>;
}
const List = posed.ul({
    exit: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { default: { duration: 100 } },
        beforeChildren: true,
        staggerChildren: 120,
    },
});
const AnimatedItem = posed.a({
    exit: {
        opacity: 0,
    },
    enter: { opacity: 1 },
});

const Item = forwardRef<any, any>(({ children, key, className, onClick }, ref) => {
    return (
        <AnimatedItem key={key} ref={ref} className={className} onClick={onClick}>
            {children}
        </AnimatedItem>
    );
});
const AnimatedList: React.FC<Props> = ({ status, list }) => {
    const [selected, setSelected] = useState('');

    const handleClick = (id: string) => {
        if (id === selected) setSelected('');
        else setSelected(id);
    };
    interface Ingredients {
        name: string;
        measure: string;
    }
    const getIngredients = (cocktail: Cocktail) => {
        // this is awful, like the API response
        const ingredients: Array<Ingredients> = [];
        Object.entries(cocktail).forEach(value => {
            //key
            if (value[0].indexOf('strIngredient') > -1) {
                const key = value[0].split('strIngredient')[1];
                const name = value[1];
                const index = parseInt(key);
                if (key && index && name !== null)
                    ingredients[index - 1] = {
                        name,
                        measure: '',
                    };
            } else if (value[0].indexOf('strMeasure') > -1) {
                const key = value[0].split('strMeasure')[1];
                const measure = value[1];
                const index = parseInt(key);
                if (key && index && ingredients[index - 1])
                    ingredients[index - 1].measure = measure;
            }
        });
        return ingredients;
    };
    return (
        <div className="animatedList">
            {status === 'fetched' ? (
                <List initialPose="exit" pose={status === 'fetched' ? 'enter' : 'exit'}>
                    <PoseGroup>
                        {list.map((cocktail, index) => {
                            const {
                                idDrink,
                                strDrinkThumb,
                                strDrink,
                                strInstructions,
                                strCategory,
                                strGlass,
                            } = cocktail;
                            const status = idDrink === selected ? 'expanded' : 'collapsed';
                            return (
                                <Item
                                    className="animatedItem"
                                    key={`clientItem_${idDrink}`}
                                    onClick={(e: Event) => handleClick(idDrink)}>
                                    <img src={strDrinkThumb} alt={strDrink} className="image" />
                                    <div className={`description ${status}`}>
                                        <p className="title">{strDrink}</p>

                                        <span className={`instructions ${status}`}>
                                            <span>{strInstructions}</span>
                                            {status === 'expanded' && (
                                                <>
                                                    <p>
                                                        <span className="label">Category</span>
                                                        <b>{strCategory}</b>
                                                    </p>
                                                    <p>
                                                        <span className="label">Glass</span>
                                                        <b>{strGlass}</b>
                                                    </p>
                                                    <span className="label">Ingredients</span>
                                                    <ul>
                                                        {getIngredients(cocktail).map(
                                                            (i: Ingredients, index: number) => {
                                                                return (
                                                                    <li
                                                                        key={`ingredient_${idDrink}_${index}`}>
                                                                        {i.name} {i.measure}
                                                                    </li>
                                                                );
                                                            },
                                                        )}
                                                    </ul>
                                                </>
                                            )}
                                        </span>
                                    </div>
                                </Item>
                            );
                        })}
                    </PoseGroup>
                </List>
            ) : (
                <Info status={status} />
            )}
        </div>
    );
};

export default AnimatedList;
