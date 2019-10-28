import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseReducer } from 'react-redux-firebase';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import listReducer from './reducers/listReducer';
import { rrfConfig, fbConfig } from '../configs/firebase';

const rootReducer = combineReducers({
    listReducer,
    firebase: firebaseReducer,
});
const middlewares = [thunk.withExtraArgument(getFirebase)];
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

firebase.initializeApp(fbConfig);
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};
export { store, rrfProps };
