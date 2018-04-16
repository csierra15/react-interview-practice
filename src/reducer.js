import { ADD_TO_DO } from './actions'

const initialState = {
  todos: []
}

type: 'ADD_TO_DO',
return {
  ...state,
  todos: action.todos
}

default: return state
