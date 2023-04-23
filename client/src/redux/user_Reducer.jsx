import { createSlice } from '@reduxjs/toolkit'

export const UserReducer = createSlice({
    name:'User',
    initialState:{
        islogin: false,
        personal_data: {},

    },
    reducers :{
        loginupdate:(state)=>{
            state.islogin = !state.islogin;
        },
        collectdata :(state,action)=>{
            state.personal_data = {
                ...action.payload
            }
        },
    },
})

export const {collectdata,loginupdate} = UserReducer.actions;

export default UserReducer.reducer;
