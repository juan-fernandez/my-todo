import React from "react"
import {connect} from "react-redux"
import {fetchNews} from "../actions/newsActions"


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

   render(){
      const {news, todo} = this.props;
      console.log(news.news)



      return (
            <div class="container jumbotron">

               <div class="col-md-6">
                  <input type="text" onKeyPress={this.fetchNews.bind(this)}></input>

                  {news.fetching ? <p>Waiting for response...</p>:""}
                  <p>{news.fetching ? "":news.news.snippet}</p>
               </div>
               <div class="col-md-6">

               </div>
            </div>
      );
   }
}
