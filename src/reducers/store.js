import anecdoteReducer from './anecdoteReducer'
import FilterReducer from './FilterReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: FilterReducer,
        notificaton: notificatonReducer
    }
}
)
//const store = createStore(reducer)

export default store;