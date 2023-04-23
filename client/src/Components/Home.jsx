import React from 'react'
import Gk from '../assets/2473062.jpg';
import India from '../assets/2559250.jpg';
import Inventions from '../assets/5239.jpg';
import Poets from '../assets/22890308_6726141.jpg';
import { useDispatch } from "react-redux";
import { setsubject } from "../redux/question_Reducer";
import { NavLink } from 'react-router-dom';

function Home() {
    const arr = [
        {
            img: Gk,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Error molestiae facere dolorum autem minus aut ducimus consectetur eius doloribus esse!",
            name: "general"
        },
        {
            img: India,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Error molestiae facere dolorum autem minus aut ducimus consectetur eius doloribus esse!",
            name: "state"
        },
        {
            img: Inventions,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Error molestiae facere dolorum autem minus aut ducimus consectetur eius doloribus esse!",
            name: "invention"
        },
        {
            img: Poets,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Error molestiae facere dolorum autem minus aut ducimus consectetur eius doloribus esse!",
            name: "poet"
        },
        {
            img: "https://pbs.twimg.com/profile_images/677345288198189057/t79FXOUx_400x400.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Error molestiae facere dolorum autem minus aut ducimus consectetur eius doloribus esse!",
            name: "history"
        },
    ]

    

    const dispatch = useDispatch();

    return (
        <div className="">
            <div className=' m-2 mr-5 mt-3 flex justify-end'>
                <NavLink className='cursor-pointer text-white bg-green-700 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black' to={'/result_list'} >Get Previous Results</NavLink>
            </div>
            <div className='flex flex-row flex-wrap'>
                {
                    arr.map((value, index) => {
                        return (
                            <div key={index} className='p-3 flex flex-row w-3/12' onClick={() => (dispatch(setsubject(value.name)))}>
                                <NavLink to={"/quiz"}>
                                    <div className='border-orange-100 border-4 p-2  bg-blue-950 rounded-xl hover:bg-blue-900 hover:cursor-pointer'>
                                        <div>
                                            <img src={value.img} alt="" />
                                        </div>

                                        <div className='text-white pt-2'>
                                            <div className='mb-2 flex items-center'>
                                                {String(value.name).toUpperCase()}
                                            </div>
                                            {value.text}
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Home