import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers:{
        showNotification(state, action){
            return state = action.payload
        },

        clearNotificaiton(state){
            return state=''
        }
    }

})

export const {showNotification, clearNotificaiton} = notificationSlice.actions;

export const setNotification = (message, time)=>{
    return async dispach =>{
        dispach(showNotification(message))
        setTimeout(()=>{
            dispach(clearNotificaiton())
        }
        , time*1000)
    }
}

export default notificationSlice.reducer;