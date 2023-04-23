import React, { useState,useEffect } from 'react'

function login_Page() {


    const [data, setData] = useState({
        email: "", password: ""
    });

    const collectdata = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setData({ ...data, [name]: value })
    }
    useEffect(() => {
        console.log(data)
    })
    
    
    const handlelogin = async (e) => {
        e.preventDefault();
        const { email, password } = data;
      
        try {
          const res = await fetch('/api/register', {
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
            alert("there is an error")
          } else {
            console.log("success")
          }
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <div>
            <form method='POST'>
                <div className="relative mb-3 xl:w-96">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        onChange={collectdata}
                        value={data.email}
                        name="email"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="relative mb-3 xl:w-96">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
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
                <div className="flex  justify-center flex-col">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlelogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default login_Page