import { useSelector } from 'react-redux'
import {Navigate} from "react-router-dom"
import axios from 'axios';
export function attempts_number(result){
    let i =0;
    for(let r =0; r<result.length; r++){
        if(result[r]!=undefined) i++;
    }
    return i;
} 

export function marks_count(result,answers){
    let i =0;
    for(let r =0; r<result.length; r++){
        if(result[r]==answers[r]) i++;
    }
    return i;
} 

export const Auth = ({ children })=>{
    const data = useSelector(state=>state.result.userid)
    return (data ? children : <Navigate to={"/"} replace={true}></Navigate>)
}

export async function getServerData(url,callback){
    const data =await (await axios.get(url))?.data;
    return callback? callback(data):data;
}

export async function postServerData(url,result,callback){
    const data =await (await axios.post(url,result))?.data;
    return callback? callback(data):data;
}

