import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import images from '../assets/5239.jpg';


function Results_list() {

    const [results_data, setResults_data] = useState([])
    const userid = useSelector((state) => state.User.personal_data.email)




    const GetResultData = async () => {
        console.log("line 14", typeof (results_data))
        try {
            const res = await fetch(`/api/result/${userid}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            if (res.status !== 201) {
                console.log(typeof (data));
                throw new Error("Error fetching data");
            }
            else {
                console.log(data.q)
                console.log(typeof (data.q))
                setResults_data(data.q);
                console.log("this is results", results_data)
                console.log("line 37", typeof (results_data))
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (results_data.length == 0) {
            GetResultData()
        }
    }, []);


    return (


        <div className='flex flex-col'>
            {
                results_data.map((data, index) => (
                    <div key={index} className='rounded-2xl flex shadow-lg bg-green-600  p-3 m-5 justify-between hover:bg-green-400 hover:h-32 hover:p-4 hover:cursor-pointer' >
                        <img src={images} className='rounded-full h-16'></img>
                        <div className='space-y-2 hover:text-white'>
                            <h2>{data.username}</h2>
                            <h2>Status: {data.achived}</h2>
                        </div>
                        <div className='space-y-2 hover:text-white'>
                            <h1>Attempts:{data.attempts}/{data.result.length}</h1>
                            <h2>Points: {data.points}/{data.result.length}</h2>
                            <h3>{data.createdat}</h3>
                        </div>
                    </div>
                ))

            }
            <div className=' m-2 mr-5 mt-3 flex justify-end'>
                <NavLink className='cursor-pointer text-white bg-green-700 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black' to={'/home'} >Go Home Page</NavLink>
            </div>
        </div>
    )
}

export default Results_list