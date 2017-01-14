export default function reducer(state={
    todo: [],
  }, action) {

    switch (action.type) {
      case "CREATE_TODO": {
        return {
          ...state,
          todo: [...state.todo, action.payload],
        }
      }
    }

    return state
}
