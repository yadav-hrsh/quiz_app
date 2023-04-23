import React, { useState,useEffect } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom'
import * as Actions from "../redux/question_Reducer";
import * as ActionResult from "../redux/Result_reducer";

const Quiz = () => {

const [check, setcheck] = useState(undefined);
  const result = useSelector((state)=>state.result.result);
  const questions = useSelector((state) => state.questions);
  const trace = questions.trace
  const dispatch = useDispatch();

  console.log("questions",questions)
  console.log("results",result)
  console.log("ans: ",questions.ans)
  const onChecked = (i) => {
    setcheck(i);
  };

  const onNext = () => {
    if (questions.trace < questions.queue.length) {
      dispatch(Actions.moveNextAction());
      //insert new result
      if(result.length<= questions.trace){
      dispatch(ActionResult.pushResultAction(check));}

      setcheck(undefined);
    }
  };

  const onPrev = () => {
    if (questions.trace > 0) {
      dispatch(Actions.movePrevAction(1));
    }
  };

  if(result.length && result.length>= questions.queue.length){
    return <Navigate to={'/result'} replace></Navigate>
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions onChecked={onChecked} />

      <div className="grid">
      {
        (trace>0)?
          <button className="btn prev" onClick={onPrev}>
          Prev
        </button>:null
        
      }
        
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
