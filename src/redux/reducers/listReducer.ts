import * as ListReducer from '../../interfaces/ListReducer';

const initialState: ListReducer.State = {
    list: [],
    status: 'initial',
};

const listReducer = (state = initialState, action: ListReducer.Action): ListReducer.State => {
    switch (action.type) {
        case ListReducer.ActionTypes.clearList: {
            return {
                status: 'initial',
                list: [],
            };
        }
        case ListReducer.ActionTypes.receiveCocktails: {
            return {
                list: action.payload ? action.payload : [],
                status: action.payload && action.payload.length ? 'fetched' : 'empty',
            };
        }
        case ListReducer.ActionTypes.requestCocktails: {
            return {
                ...state,
                status: `fetching`,
            };
        }
        case ListReducer.ActionTypes.saving: {
            return {
                ...state,
                status: `saving`,
            };
        }
        case ListReducer.ActionTypes.saved: {
            return {
                ...state,
                status: `saved`,
            };
        }
        default:
            return state;
    }
};
export default listReducer;
