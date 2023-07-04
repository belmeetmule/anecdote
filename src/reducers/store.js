import {createStore, combineReducers} from 'redux'
import anecdoteReducer from './anecdoteReducer'
import FilterReducer from './FilterReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: FilterReducer
    }
}
)
//const store = createStore(reducer)

export default store;