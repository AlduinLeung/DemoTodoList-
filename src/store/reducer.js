const defaultstate={
    inputValue:'',
    list:[]
}
export default (state=defaultstate,action)=>{
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value   //actio第二个参数是value，负责接受的是inputValue
        return newState
    }
    if(action.type==='add_Item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue=''   
        return newState;
        
    }
    if(action.type==='delete_Item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState
    }
    return state;
}