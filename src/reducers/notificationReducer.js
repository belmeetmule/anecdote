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
export default notificationSlice.reducer;