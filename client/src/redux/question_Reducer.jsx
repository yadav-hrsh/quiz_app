import { createSlice } from '@reduxjs/toolkit'

export const questionReducer = createSlice({
    name:'questions',
    initialState:{
        queue: [],
        ans:[],
        trace:0
    },
    reducers :{
        startExamAction : (state,action) =>{
            return {
                ...state,
                queue: action.payload.question,
                ans: action.payload.answers
            }
        },
        moveNextAction:(state)=>{
                state.trace++; 
        },
        movePrevAction:(state)=>{
            
            state.trace--;
        },
        resetQuestionAction:()=>{
            return{
                queue: [],
                ans:[],
                trace:0
            }
        }
    },
})

export const {startExamAction,moveNextAction,movePrevAction,resetQuestionAction} = questionReducer.actions;

export default questionReducer.reducer;
