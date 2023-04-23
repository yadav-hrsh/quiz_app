import React, { useRef, useState } from "react";
import "../styles/Index.css";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/Result_reducer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom'
import * as UserData from '../redux/user_Reducer';

const Main = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "", password: ""
  });

  const collectdata = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setData({ ...data, [name]: value })
  }
  const islogin = useSelector((state) => state.User.islogin)
  const personaldata = useSelector((state) => state.User.personal_data)


  const handlelogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    console.log(data)
    try {
      const res = await fetch('/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      const message = await res.json();

      if (res.status === 422 || res.status === 522 || !message) {
        alert("please Login First")
      } else {
        console.log("success logged in")
        dispatch(UserData.loginupdate());
        dispatch(UserData.collectdata(data));
        navigate('/home');
      }

    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className='flex flex-col space-y-12 items-center'>
      <h1 className="flex text-white text-3xl mt-10">Please Enter your Name..</h1>
      <div className="w-4/12">
        <form className="flex flex-col">
          <div className="mb-3 ">
            <label className="block text-white font-bold mb-2" htmlFor="email">
              UserName
            </label>
            <input
              onChange={collectdata}
              value={data.email}
              name="email"
              placeholder="Username*"
              type="text"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-3 ">
            <label className="block text-white font-bold mb-2" htmlFor="email">
              Password
            </label>
            <input
              onChange={collectdata}
              value={data.password}
              name="password"
              type="password"
              placeholder="Password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="start">
            <button className="btn" onClick={handlelogin}>
              start Quiz
            </button>
          </div>
          <Link to='/register'>
            <h2 className="flex justify-center p-3 hover:text-emerald-600 text-white font-serif">Not Registered??</h2>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
