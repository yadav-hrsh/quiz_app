import { combineReducers, configureStore} from '@reduxjs/toolkit'

//call reducers
import questionReducer from './question_Reducer'
import  resultReducer  from './Result_reducer'
import UserReducer from './user_Reducer';


const rootReducer = combineReducers({
    questions:questionReducer,
    result : resultReducer,
    User: UserReducer
})

//created store with reducers
export default configureStore({reducer:rootReducer})