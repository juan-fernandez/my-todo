import React from "react"
import {connect} from "react-redux"
import {fetchNews} from "../actions/newsActions"
import {createTodo,fetchTodos,deleteTodo} from "../actions/todosActions"
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
         },
         editTodo: false,
         editTodo_id:null
      }

   }
   componentWillMount(){
      this.props.dispatch(fetchTodos());
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
   deleteTodo(todo_id){

      this.props.dispatch(deleteTodo(todo_id))
   }
   editTodo(todo_id){
      console.log("layout edit",todo_id)
      this.setState({editTodo:true,editTodo_id:todo_id});
      //this.props.dispatch(deleteTodo(todo_id))
      
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
      const edit_buttons = {
         action: "Edit",
         openModal: "Edit todo",
         close: "Cancel"
      }

      return (
            <div class="container-fluid jumbotron">
               <Modal hidden={true} updateValue={this.updateInputs.bind(this)} inputFields={this.state.new_todo_info} buttons={buttons} text={text} action={this.createTodo.bind(this)}></Modal>

               <div class="col-md-6 col-xs-12">
                  <h3> Manage your to-dos </h3>
                  <Modal hidden={false} updateValue={this.updateInputs.bind(this)} inputFields={this.state.new_todo_info} buttons={buttons} text={text} action={this.createTodo.bind(this)}></Modal>

                  <TodoList action_edit={this.editTodo.bind(this)} action_delete={this.deleteTodo.bind(this)} style={todoStyle} list={todo}></TodoList>
               </div>
               <div class="col-md-6 col-xs-12">
                  <h3> Look for headlines </h3>
                  <input type="text" onKeyPress={this.fetchNews.bind(this)}></input>

                  {news.fetching ? <p>Waiting for response...</p>:""}
                  <p>{news.fetching ? "":news.news.snippet}</p>

               </div>
            </div>
      );
   }
}
