import React from "react"
import {connect} from "react-redux"
import {fetchNews} from "../actions/newsActions"
import {createTodo} from "../actions/todosActions"
import Modal from "./Modal"


@connect((store)=>{
   return {
      news: store.news,
      todo: store.todos,
   }
})
export default class Layout extends React.Component{

   constructor(){
      super();
      this.state={
         new_todo_info:{
            Name:"",
            Description:""
         }
      }
   }
   fetchNews(event){

      if(event.charCode == 13){ // enter
         const query = event.target.value;
         this.props.dispatch(fetchNews(query))
         event.target.value = "";
      }
   }
   createTodo(){
      console.log('received create todo',this.state.new_todo_info)
      this.props.dispatch(createTodo(this.state.new_todo_info))
      this.setState({new_todo_info:{Name:"",Description:""}})
   }
   updateInputs(field_key,field_value){
      this.state.new_todo_info[field_key] = field_value;
      this.forceUpdate()
   }

   render(){
      const {news, todo} = this.props;
      console.log("todo",todo)
      const buttons = {
         action: "Create",
         openModal: "Create todo",
         close: "Cancel"
      }
      const text={
         header: "New todo"
      }
      const todoList = todo.todo.map((todo)=>{
         return <div key={todo.Name}><p>Name: {todo.Name}</p><p>Description: {todo.Description} </p></div>
      })

      return (
            <div class="container jumbotron">

               <div class="col-md-6">
                  <input type="text" onKeyPress={this.fetchNews.bind(this)}></input>

                  {news.fetching ? <p>Waiting for response...</p>:""}
                  <p>{news.fetching ? "":news.news.snippet}</p>

               </div>
               <div class="col-md-6">
                  <Modal updateValue={this.updateInputs.bind(this)} inputFields={this.state.new_todo_info} buttons={buttons} text={text} action={this.createTodo.bind(this)}></Modal>
                  {todoList}
               </div>
            </div>
      );
   }
}
