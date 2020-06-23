import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODOITEM,ININ_LIST_ACTION} from './actiontypes.js'
const defaultstate={
    inputValue:'',
    list:[]
}

//这样代码经过切分可以避免错误
export default (state=defaultstate,action)=>{
            if(action.type===CHANGE_INPUT_VALUE){
                const newState=JSON.parse(JSON.stringify(state));
                newState.inputValue=action.value
                return newState;
                } 
            if(action.type===ADD_TODO_ITEM){
                // const newItem=JSON.parse(JSON.stringify(state));
                // newItem.list.push(newItem.inputValue);     //
                // newItem.inputValue='';
                    const newState=JSON.parse(JSON.stringify(state));
                    newState.list.push(newState.inputValue);
                    newState.inputValue='';
                    return newState
                }
    if(action.type===DELETE_TODOITEM){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1);
        
        return newState
    }
    if(action.type===ININ_LIST_ACTION){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;
    }
    return state
}
//拆分
// export default (state=defaultstate,action)=>{
//     if(action.type==='change_input_value'){
//         const newState=JSON.parse(JSON.stringify(state));
//         newState.inputValue=action.inputValue
//         return newState;
//     } 
//     if(action.type==='add_todoItem'){
//         // const newItem=JSON.parse(JSON.stringify(state));
//         // newItem.list.push(newItem.inputValue);     //
//         // newItem.inputValue='';
//         const newState=JSON.parse(JSON.stringify(state));
//         newState.list.push(newState.inputValue);
//         newState.inputValue='';
//         return newState
//     }
//     if(action.type==='delete_toItem'){
//         const newState=JSON.parse(JSON.stringify(state))
//         newState.list.splice(action.index,1);
        
//         return newState
//     }
//     return state
// }