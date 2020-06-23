import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODOITEM,ININ_LIST_ACTION,GET_INIT_LIST} from './actiontypes.js'

export const  getInputChangeAction=(value)=>({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction=()=>({
    type:ADD_TODO_ITEM
})

export const getDeleteItemAction=(index)=>({
    type:DELETE_TODOITEM,
    index
})
export const initListAction=(data)=>({
    type:ININ_LIST_ACTION,
    data
})
export const getInitList=()=>({
    type:GET_INIT_LIST,
})