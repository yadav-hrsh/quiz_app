import React, { useRef } from "react";
import "../styles/Index.css";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/Result_reducer";
import { useDispatch } from "react-redux";
const Main = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const getuser = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current.value));
    }
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>you will be given 10 questions</li>
        <li>Each questions has four options you have to select only once</li>
        <li>you can review and changed answers before the quiz finishes</li>
      </ol>

      <form id="form">
        <input
          className="userid"
          ref={inputRef}
          placeholder="Username*"
          type="text"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={getuser}>
          start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Main;
