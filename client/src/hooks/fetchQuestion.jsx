import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getServerData} from '../helper/helper';
// redux actions 
import * as Actions from '../redux/question_Reducer'
export const useFetchQuestion = () =>{

    const dispatch = useDispatch();

    const [getData, setgetData] = useState({isLoading: false, apidata: [], servererror:null});

    const subject = useSelector(
        (state) => state.questions.subject
    );
    console.log(subject);
    useEffect(() => {
        setgetData(prev => ({...prev, isLoading:true}));

        (async ()=>{
            try {
                const [{question,answers}] = await getServerData(`http://localhost:8080/api/questions/:${subject}`)
                console.log(question);
                if (question.length>0){
                    setgetData(prev => ({...prev, isLoading:false}))
                    setgetData(prev => ({...prev, apidata:{question,answers}}))

                    dispatch(Actions.startExamAction({question,answers}))
                }   
                else{
                    throw new Error("NO ques Available")
                }         
            } catch (error) {
                setgetData(prev => ({...prev, isLoading:false}))
                setgetData(prev => ({...prev, servererror:error}))
            }
        })();
    },[dispatch]);

    return [getData,setgetData];
}
