import React, { useState, useEffect } from "react";
import "../styles/App.css";

import { useSelector, useDispatch } from "react-redux";

// custom Hooks
import { useFetchQuestion } from "../hooks/fetchQuestion";
import { updateResultAction } from "../redux/Result_reducer";

const Questions = ({ onChecked }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(undefined);

  const [{ isLoading, apidata, servererror }] = useFetchQuestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  const trace = useSelector(
    (state) => state.questions.trace
  );

  
  const result = useSelector(
    (state) => state.result.result
  );
  useEffect(() => {
    // console.log("trace: ",trace,"chceked: ",checked)
    dispatch(updateResultAction({ trace, checked }));
  },[checked]); 

  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(updateResultAction({ trace, checked }));
  };

  if (isLoading) return <h3 className="text-light">is Loading</h3>;
  if (servererror)
    return <h3 className="text-light">{servererror || "unknown Error"}</h3>;
  return (
    <div className="questions">
      <h2 className="text-light">
        {questions?.id}. {questions?.question}
      </h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}`}
              onChange={() => onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}`}>
              {q}
            </label>
            <div className={`check ${result[trace]==i ?'checked':''}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
