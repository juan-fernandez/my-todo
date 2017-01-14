export default function reducer(state={
    news: {
      section_name: null,
      snippet: null
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_NEWS": {
        return {...state, fetching: true}
      }
      case "FETCH_NEWS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_NEWS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          news: action.payload,
        }
      }
    }

    return state
}
