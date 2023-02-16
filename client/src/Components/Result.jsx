import React from 'react'
import Result_table from './Result_table';
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { resetResultAction } from '../redux/Result_reducer'
import { resetQuestionAction } from '../redux/question_Reducer'
import {attempts_number,marks_count} from '../helper/helper.jsx'
import '../styles/Result.css'
import {postServerData} from '../helper/helper';
const Result = () => {
  const answers = useSelector((state)=>state.questions.ans);
  const result = useSelector((state)=>state.result.result);
  const userid = useSelector((state)=> state.result.userid)
  const attempts = attempts_number(result);
  const marks = marks_count(result,answers)*10;
   
  const status = (marks>=(answers.length*10)/3)?"passed":"failed"

  const send_result = postServerData('http://localhost:8080/api/result',{
      "username":userid, 
      "result":result,
      "attempts":attempts,
      "points":marks,
      "achived":status
  });
  console.log(send_result)
  const dispatch = useDispatch();

  const onRestart=()=>{
    dispatch(resetResultAction());
    dispatch(resetQuestionAction());
  }
  return (
    <div className="container">
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
          <div className='flex'>
            <span>Username</span>
            <span className='bold'>{userid}</span>
          </div>
          <div className='flex'>
          <span>Total Quiz Points: </span>
            <span className='bold'> {answers.length*10}</span>
          </div>
          <div className='flex'>
          <span>Total Questions : </span>
            <span className='bold'> {answers.length}</span>
          </div>
          <div className='flex'>
          <span>Total Attempts: </span>
            <span className='bold'> {attempts}</span>
          </div>
          <div className='flex'>
          <span>Total Earn Points: </span>
            <span className='bold'>{marks}</span>
          </div>
          <div className='flex'>
          <span>Result: </span>
            <span className='bold'> {status}</span>
          </div>
        </div>

        <div className='start'>
          <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>

        <div className='container'>
          <Result_table userid={userid} attempts={attempts} marks={marks} status={status}></Result_table>
        </div>
    </div>
  )
}

export default Result