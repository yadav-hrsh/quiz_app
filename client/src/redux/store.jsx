import { combineReducers, configureStore} from '@reduxjs/toolkit'

//call reducers
import questionReducer from './question_Reducer'
import  resultReducer  from './Result_reducer'


const rootReducer = combineReducers({
    questions:questionReducer,
    result : resultReducer
})

//created store with reducers
export default configureStore({reducer:rootReducer})