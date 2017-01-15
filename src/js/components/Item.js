import React from "react";


export default class Item extends React.Component {
   constructor(){
      super();
   }

   deleteTodo(event){

      this.props.action_delete(event.target.id)
   }

   render() {
      const {todo_id,content} = this.props;

      const elements = [];
      for(const key_id of Object.keys(content)){

         elements.push(


            <div key={key_id} class="panel-body">{content[key_id]}</div>

         )
      }
      return(
         <div class="panel panel-success">
            {elements}
            <input onClick={this.deleteTodo.bind(this)} id={todo_id} value="Delete" type="button"></input>
         </div>
      )
   }
}
