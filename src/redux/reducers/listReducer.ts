import * as ListReducer from '../../interfaces/ListReducer';

const initialState: ListReducer.State = {
    list: [],
    status: 'empty',
};

const listReducer = (state = initialState, action: ListReducer.Action): ListReducer.State => {
    switch (action.type) {
        case ListReducer.ActionTypes.clearList: {
            return {
                ...state,
                list: [],
            };
        }
        case ListReducer.ActionTypes.receiveCocktails: {
            return {
                list: action.payload ? action.payload : [],
                status: 'fetched',
            };
        }
        case ListReducer.ActionTypes.requestCocktails: {
            return {
                ...state,
                status: `fetching`,
            };
        }

        default:
            return state;
    }
};
export default listReducer;
