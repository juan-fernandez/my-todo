import React from "react";
import Item from "./Item"

export default class TodoList extends React.Component {
   constructor(){
      super();
   }

   render() {
      const {list,action_delete} = this.props;
      console.log("props todolist: ",list)
      if(list.fetching){
         return <div>Uploading info...</div>
      }
      if(list.fetched){
         console.log("list.todo",list.todo)
         const todoList = list.todo.map((todo,index)=>{
            return <Item action_delete={action_delete} todo_id={todo.id} key={todo.id} content={todo.todo_info}></Item>
         })
         return <div style={this.props.style}>{todoList}</div>
      }
      
      return (
         <div style={this.props.style}></div>
      )
   }
}
