export function createTodo(todo_info) {
  return {
    type: "CREATE_TODO",
    payload: todo_info
  }
}
