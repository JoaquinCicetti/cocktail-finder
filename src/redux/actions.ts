import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import * as ListReducer from '../interfaces/ListReducer';
import { Cocktail, APIResponse } from '../interfaces/Cocktail';

// clear cocktail list
export const clearCocktails = () => ({
    type: ListReducer.ActionTypes.clearList,
});

// set status
export const requestCocktails = (value: string) => ({
    type: ListReducer.ActionTypes.requestCocktails,
    payload: value,
});

// save fetched list
export const receiveCocktails = (cocktails: Array<Cocktail>) => ({
    type: ListReducer.ActionTypes.receiveCocktails,
    payload: cocktails,
});

// send search request
export const search = (
    value: string,
): ThunkAction<void, ListReducer.State, null, Action<string>> => async dispatch => {
    // set status
    dispatch(requestCocktails(value));

    // return a new promise
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then((response: Response) => {
            return response.json();
        })
        .then((json: APIResponse) => dispatch(receiveCocktails(json.drinks)))
        .catch(error => console.log('An error occurred.', error));
};
