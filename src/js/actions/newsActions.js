import axios from "axios";

export function fetchNews(query) {
  return function(dispatch) {
   dispatch({type: "FETCH_NEWS"});
   
   }
  }
