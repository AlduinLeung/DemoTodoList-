import React,{Component} from 'react'
import 'antd/dist/antd.css' 
import store from './store'
import axios from 'axios'
import {getInitList,getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction} from './store/actionCreators'
import TodolistUI from './TolistUI.js'

class TodoList extends Component{     //这里只是负责业务逻辑和功能实现，不负责页面渲染，涉及到组件拆分
    constructor(props){
        super(props);
       this.state=store.getState();
       this.handleInputChange=this.handleInputChange.bind(this);
       this.handleStoreChange=this.handleStoreChange.bind(this);
       this.handleButtonOnclick=this.handleButtonOnclick.bind(this);
       this.handleItemClick=this.handleItemClick.bind(this )
       store.subscribe(this.handleStoreChange)
       
    }

//当组件发生变化时，重新调用store.getState()然后进行数据替换
    handleStoreChange(){
        this.setState(store.getState()) 
    }

// 改变输入框中的内容
    handleInputChange(e){
        // const action={ //通过actionCreator统一管理action
        //     type:CHANGE_INPUT_VALUE,
        //     inputValue:e.target.value
        // }
        const action=getInputChangeAction(e.target.value)
        store.dispatch(action);
        console.log(store.getState())
    } 
//添加todoitem
    handleButtonOnclick(){
    //   const action={
    //         type:ADD_TODO_ITEM,
    //     }
    const action=getAddItemAction(); 
    store.dispatch(action);  
    }


//删除item
    handleItemClick(index){
        // const action={
        //     type:DELETE_TODOITEM,
        //     index
        // }
        const action=getDeleteItemAction(index);
        store.dispatch(action)    
    }

    render(){
        return  (<TodolistUI 
         inputValue={this.state.inputValue}
         handleInputChange={this.handleInputChange}
         handleButtonOnclick={this.handleButtonOnclick}
         list={this.state.list}
         handleItemClick={this.handleItemClick}
         handleStoreChange={this.handleStoreChange}

        />)
    }
    componentDidMount(){
       const action=getInitList();
       store.dispatch(action)
    }
}



export  default TodoList 