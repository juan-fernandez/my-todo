import axios from "axios";

export function fetchNews(query) {
  return function(dispatch) {
   dispatch({type: "FETCH_NEWS"});
   console.log("query",query)
   axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bc74e70deccf420babbeb22b4db8638b&q="+query)
      .then((response)=>{
         dispatch({type: "FETCH_NEWS_FULFILLED", payload: response.data.response.docs[0]})
      })
      .catch((err)=>{
         dispatch({type: "FETCH_NEWS_REJECTED", payload: err})
      })
   }
  }
