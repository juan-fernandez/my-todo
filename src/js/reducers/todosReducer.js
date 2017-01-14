export default function reducer(state={
    todo: {
      name: null,
      description: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TODO": {
        return {...state, fetching: true}
      }
      case "FETCH_TODO_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TODO_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          todo: action.payload,
        }
      }
      case "SET_TODO_NAME": {
        return {
          ...state,
          todo: {...state.todo, name: action.payload},
        }
      }
      case "SET_TODO_DESCRIPTION": {
        return {
          ...state,
          user: {...state.todo, description: action.payload},
        }
      }
    }

    return state
}
