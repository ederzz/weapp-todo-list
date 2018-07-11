import { combineReducers } from 'redux'
import counter from './counter'
import todoList from './todos'

export default combineReducers({
  counter,
  todoList
})