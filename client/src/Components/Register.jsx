import React, { useRef, useState } from "react";
import "../styles/Index.css";
import { Link } from "react-router-dom";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            if(res.status===422){
                window.alert("Fill data please")
            }
            const message = await res.json();
            console.log(message)
        }
        catch (err) {
            setError(err);
        }
    };

    return (
        <div className='flex flex-col space-y-12 items-center'>
            <h1 className="flex text-white text-3xl mt-10">Register Yourself.</h1>
            <div className="w-4/12">
                <form className="flex flex-col">
                    <div className="mb-3 ">
                        <label className="block text-white font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            // ref={inputRef}
                            value={email}
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
                            required
                            onChange={(event) => setPassword(event.target.value)}
                            name="password"
                            value={password}
                            type="password"
                            placeholder="Password"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="start">
                        <button type="submit" onClick={handleSubmit} className="bg-yellow-400 rounded-sm p-2 font-bold px-6 hover:bg-green-50">Register</button>
                    </div>
                    <Link to='/'>
                        <h2 className="flex justify-center p-3 hover:text-emerald-600 text-white font-serif">Already Registered??</h2>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
