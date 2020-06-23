import React from 'react'
import { Input,Button,List} from 'antd';
const  TodolistUI=(props)=>{
    return (

        <div
        style={{marginTop:10,marginRight:10}}>
        <Input 
         placeholder="TodoItem" 
         style={{width:300,marginRight:10}} 
         value={props.value}
        onChange={props.handleInputChange}
         />
        <Button type="primary"
        onClick={props.handleButtonOnclick}
        >提交</Button>
        <List style={{width:'300px',marginTop:'10px'}}
      bordered
      dataSource={props.list}
      renderItem={(item,index) => (
        <List.Item onClick={(index)=>{props.handleItemClick(index)}}>
        {item}
        </List.Item>
      )}
    />
        </div>



    )
}
// class TodolistUI extends Component{     ///没有任何逻辑，只负责页面渲染  
//                                         //
//     render(){
//         return (
//            )}
// }
export default TodolistUI