import { createSlice } from '@reduxjs/toolkit'

export const questionReducer = createSlice({
    name:'questions',
    initialState:{
        subject:"",
        queue: [],
        ans:[],
        trace:0
    },
    reducers :{
        setsubject : (state,action)=>{
            state.subject = action.payload;
        },
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

export const {startExamAction,moveNextAction,movePrevAction,resetQuestionAction,setsubject} = questionReducer.actions;

export default questionReducer.reducer;
