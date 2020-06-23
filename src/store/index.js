 import {createStore,applyMiddleware,compose} from 'redux'
 import createSagaMiddleware from 'redux-saga'
 import reducer from './reducer'
import todosagas from './sagas.js'
 const sagamiddleware=createSagaMiddleware();
 const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer=composeEnhancers(applyMiddleware(sagamiddleware)); 
const store=createStore(reducer,enhancer);
sagamiddleware.run(todosagas)
 export default store;