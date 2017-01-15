import React from "react";
import Item from "./Item"

export default class TodoList extends React.Component {
   constructor(){
      super();
   }

   render() {
      const {list} = this.props;
      if(!list.length){
         return <div></div>;
      }
      const todoList = list.map((todo,index)=>{
         return <Item key={index} content={todo}></Item>
      })

      return (
         <div style={this.props.style}>{todoList}</div>
      )
   }
}
