import axios from "axios";

export function createTodo(todo_info) {
  return function(dispatch){
     dispatch({type:"CREATE_TODO"});

     axios.post("http://rest.learncode.academy/api/juan/todos",
        {todo_info})
        .then((response)=>{
           dispatch({type: "CREATE_TODO_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
           dispatch({type: "CREATE_TODO_REJECTED", payload: err})
        })
     }
  }

export function fetchTodos() {
  return function(dispatch){

     dispatch({type:"FETCH_TODOS"});

     axios.get("http://rest.learncode.academy/api/juan/todos")
        .then((response)=>{
           dispatch({type: "FETCH_TODOS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
           dispatch({type: "FETCH_TODOS_REJECTED", payload: err})
        })
     }
  }

export function deleteTodo(todo_id) {
  return function(dispatch){
     dispatch({type:"DELETE_TODO"});

     axios.delete("http://rest.learncode.academy/api/juan/todos/"+todo_id)
        .then((response)=>{
           dispatch({type: "DELETE_TODO_FULFILLED",payload:todo_id})
        })
        .catch((err)=>{
           dispatch({type: "DELETE_TODO_REJECTED", payload: err})
        })
     }
  }
