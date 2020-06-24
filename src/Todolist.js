import React,{Component} from 'react'
import store from './store/index'
import {connect} from 'react-redux'
import { act } from 'react-dom/test-utils'
class TodoList extends Component{
    // constructor(props){
    //     super(props);
    //     this.state=store.getState();  //通过getState方法来获取store里的数据来赋给当前的state  
    // } 
    render(){
        return(
        <div>
        <div>
            <input value={this.props.inputValue} onChange={this.props.changeInputValue}/> 
            <button onClick={this.props.handleClick}>提交</button>
            <div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return <li onClick={(index)=>{this.props.handleDelete(index)}} key={index}>{item}</li> //map every item to<li>
                        })
                    }
                </ul>
            </div>
        </div>
        </div>)
    }
    handleInputChange(e){
        console.log(e.target.value)
        
    }
}

const mapStatetoProps=(state)=>{
    return{
        inputValue:state.inputValue,     //这里把store里的inputValue映射到
        list:state.list
    }
}
//store.dispatch,props
const mapDispatchToProps=(dispatch)=>{
     return{
        changeInputValue(e){
            const action={               //这里可以继续拆分，actionCreator 和actionType
                type: 'change_input_value',
                value:e.target.value
            } 
            dispatch(action) 
            //console.log(e.target.value)
        },
        handleClick(){
            const action={
                type:'add_Item',
            }
            dispatch(action);
           
        },
        handleDelete(index){
            const action={
                type:'delete_Item',
                index
            }
            dispatch(action)
           // console.log(index)
        }
     }

}
export default connect (mapStatetoProps,mapDispatchToProps)(TodoList);    //todolist和connect做连接