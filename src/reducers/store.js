import {createStore} from 'redux'
import {provider} from 'react-redux'
import anecdoteReducer from './anecdoteReducer'

const store = createStore(anecdoteReducer)

export default store;