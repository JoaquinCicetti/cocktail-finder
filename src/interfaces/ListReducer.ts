import { Cocktail } from './Cocktail';
export enum ActionTypes {
    clearList = 'CLEAR_LIST',
    requestCocktails = 'REQUEST_COCTKTAILS',
    receiveCocktails = 'RECIVE_COCTKTAILS',
    saving = 'SAVING',
    saved = 'SAVIED',
}
export interface State {
    list: Array<Cocktail>;
    status: 'initial' | 'empty' | 'fetching' | 'fetched' | 'saving' | 'saved';
}
export interface Action {
    type:
        | ActionTypes.clearList
        | ActionTypes.requestCocktails
        | ActionTypes.receiveCocktails
        | ActionTypes.saving
        | ActionTypes.saved;
    payload?: Array<Cocktail>;
}
