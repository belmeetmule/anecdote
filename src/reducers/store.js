import {createStore, combineReducers} from 'redux'
import anecdoteReducer from './anecdoteReducer'
import FilterReducer from './FilterReducer';

const reducer = combineReducers(
    {
        anecdotes: anecdoteReducer,
        filter: FilterReducer
    }
)
const store = createStore(reducer)

export default store;