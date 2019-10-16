import { Cocktail } from './Cocktail';
export enum ActionTypes {
    clearList = 'CLEAR_LIST',
    requestCocktails = 'REQUEST_COCTKTAILS',
    receiveCocktails = 'RECIVE_COCTKTAILS',
}
export interface State {
    list: Array<Cocktail>;
    status: 'empty' | 'fetching' | 'fetched';
}
export interface Action {
    type: ActionTypes.clearList | ActionTypes.requestCocktails | ActionTypes.receiveCocktails;
    payload?: Array<Cocktail>;
}
