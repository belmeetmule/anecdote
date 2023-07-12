import anecdoteReducer from './anecdoteReducer'
import FilterReducer from './FilterReducer';
import notificationReducer from './notificationReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: FilterReducer,
        notification: notificationReducer
    }
}
)
//const store = createStore(reducer)

export default store;