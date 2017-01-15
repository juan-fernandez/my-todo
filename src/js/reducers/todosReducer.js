export default function reducer(state={
    todo: [],
    fetching: false,
    fetched: false,
    error: null,
    deleting: false,
    deleted: false,
  }, action) {

    switch (action.type) {
      case "CREATE_TODO": {
        return {
          ...state,
          fetching: true
        }
      }
      case "CREATE_TODO_FULFILLED": {

        return {
          ...state,
          fetching:false,
          fetched:true,
          todo: [...state.todo,{id:action.payload.id,todo_info:action.payload.todo_info}]
        }
      }
      case "CREATE_TODO_REJECTED": {
        return {
          ...state,
          fetching:false,
          error:action.payload,
        }
      }
      case "FETCH_TODOS": {
        return {
          ...state,
          fetching: true
        }
      }
      case "FETCH_TODOS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          todo: action.payload
        }
      }
      case "FETCH_TODOS_REJECTED": {
        return {
          ...state,
          fetching: false,
          fetched: false,
          error: action.payload
        }
      }
      case "DELETE_TODO": {
        return {
          ...state,
          deleting: true,
        }
      }
      case "DELETE_TODO_FULFILLED": {
         const indexToRemove= state.todo.findIndex((element)=>{
            return element.id = action.payload
         })

        return {
          ...state,
          deleting: false,
          deleted:true,
          todo: [...state.todo.slice(0,indexToRemove), ...state.todo.slice(indexToRemove+1)]
        }
      }
      case "DELETE_TODO_REJECTED": {
        return {
          ...state,
          deleting: false,
          deleted:false,
          error: action.payload
        }
      }
    }

    return state
}
