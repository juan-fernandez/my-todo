import React from "react"
import {connect} from "react-redux"
import {fetchNews} from "../actions/newsActions"
import {createTodo} from "../actions/todosActions"

@connect((store)=>{
   return {
      news: store.news,
      todo: store.todos,
   }
})
export default class Layout extends React.Component{
   fetchNews(event){

      if(event.charCode == 13){ // enter
         const query = event.target.value;
         this.props.dispatch(fetchNews(query))
         event.target.value = "";
      }
   }
   createTodo(){
      this.props.dispatch(createTodo({name:"Todo",description:"New todo"}))
   }

   render(){
      const {news, todo} = this.props;
      console.log("todo: ",todo.todo[0])
      return (
            <div class="container jumbotron">

               <div class="col-md-6">
                  <input type="text" onKeyPress={this.fetchNews.bind(this)}></input>

                  {news.fetching ? <p>Waiting for response...</p>:""}
                  <p>{news.fetching ? "":news.news.snippet}</p>
               </div>
               <div class="col-md-6">
                  <button onClick={this.createTodo.bind(this)}>Create Todo </button>
                  <p>{todo.todo.length ? todo.todo[0].name:""}</p>
               </div>
            </div>
      );
   }
}
