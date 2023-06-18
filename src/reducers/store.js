import {createStore} from 'redux'
import anecdoteReducer from './anecdoteReducer'

const store = createStore(anecdoteReducer)

export default store;