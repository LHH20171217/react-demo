import {createStore,compose,applyMiddleware} from 'redux';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer,enhancer)
sagaMiddleware.run(mySagas);

export default store;