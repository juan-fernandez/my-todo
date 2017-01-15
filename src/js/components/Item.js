import React from "react";


export default class Item extends React.Component {
   constructor(){
      super();
   }

   deleteTodo(event){
      console.log("event",event)
      this.props.action_delete(event.target.id)
   }

   render() {
      const {todo_id,content} = this.props;

      const {marginButtons}={
         margin: '20px',
      }
      const elements = [];
      for(const key_id of Object.keys(content)){

         elements.push(
            <div key={key_id} class="panel-body">{content[key_id]}</div>
         )
      }
      return(
         <div class="panel panel-primary">

            <div class="panel-heading">
                  <i class="fa fa-pencil-square-o"></i> 
                  <i onClick={this.deleteTodo.bind(this)} id={todo_id} class="fa fa-trash-o close"></i>
            </div>
            {elements}
         </div>
      )
   }
}
