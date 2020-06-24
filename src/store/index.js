import {createStore} from 'redux'   //从redux中引入createStore
import  reducer from './reducer'
const store=createStore(reducer);

export default store;