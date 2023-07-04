import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name:'filter',
    initialState:'',
    reducers: {
         filterChanged(state,action){
           // const newState = {...state, filter: action.payload}
            return action.payload
        }
    }
})
// const FilterReducer = (state="", action) =>{
//     switch(action.type){
//         case 'FILTER':
//             const newState = {...state, filter: action.payload}
//             console.log('in the reducer', newState)
//             return action.payload
//         default:
//             return state
//     }
// }

// export const filterChanged = (filter)=>{
//     return {
//         type: 'FILTER',
//         payload: filter
//     }

// }

export const {filterChanged} = filterSlice.actions
export default filterSlice.reducer