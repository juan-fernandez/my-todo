import React from "react"
import {connect} from "react-redux"
import {fetchNews} from "../actions/newsActions"
import {createTodo} from "../actions/todosActions"
import Modal from "./Modal"
import TodoList from "./TodoList"

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

      this.props.dispatch(createTodo(this.state.new_todo_info))
      this.setState({new_todo_info:{Name:"",Description:""}})
   }
   updateInputs(field_key,field_value){
      this.state.new_todo_info[field_key] = field_value;
      this.forceUpdate()
   }

   render(){
      const {news, todo} = this.props;

      const buttons = {
         action: "Create",
         openModal: "Create todo",
         close: "Cancel"
      }
      const text={
         header: "New todo"
      }
      const todoStyle={
         marginTop: '15px'
      }

      return (
            <div class="container-fluid jumbotron">

               <div class="col-md-6 col-xs-12">
                  <input type="text" onKeyPress={this.fetchNews.bind(this)}></input>

                  {news.fetching ? <p>Waiting for response...</p>:""}
                  <p>{news.fetching ? "":news.news.snippet}</p>

               </div>
               <div class="col-md-6 col-xs-12">
                  <Modal updateValue={this.updateInputs.bind(this)} inputFields={this.state.new_todo_info} buttons={buttons} text={text} action={this.createTodo.bind(this)}></Modal>
                  <TodoList style={todoStyle} list={todo.todo}></TodoList>
               </div>
            </div>
      );
   }
}
