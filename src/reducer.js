import { addToDo } from './actions'

const initialState = {
  todos: []
}

const todo = (initialState, action) => {
  switch(action.type){
    case'ADD_TO_DO':
    return {
      ...state,
      todos: action.todos
    }
  }

  default:
    return state
}
