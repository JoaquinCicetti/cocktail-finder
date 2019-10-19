import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import listReducer from './reducers/listReducer';
import { rrfConfig, fbConfig } from '../configs/firebase';

const rootReducer = combineReducers({
    listReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
});
const middlewares = [thunk.withExtraArgument(getFirebase)];
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

firebase.initializeApp(fbConfig);
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // <- needed if using firestore
};
export { store, rrfProps };
