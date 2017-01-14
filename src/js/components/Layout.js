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
   fetchNews(){
      this.props.dispatch(fetchNews())
   }

   render(){
      const {news, todo} = this.props;
      console.log(news.news)
      if(!news.fetched && !news.fetching){
         return <button onClick={this.fetchNews.bind(this)}>load news</button>
      }
      if(news.fetching){
         return <p>Loading...</p>
      }

      return (
         <div>
            <p>{news.news.snippet}</p>
         </div>
      );
   }
}
