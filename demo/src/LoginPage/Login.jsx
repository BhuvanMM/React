import React from "react";


const Login=()=>{
    return(
        <div className="flex flex-wrap justify-center items-center my-48 space-x-3 rounded-md">
            <form action="" className="bg-purple-300 px-12 py-12 shadow-xl">
                <h1 className="text-xl font-mono">Login</h1>
                <br/>
                <div className="input-box1 rounded-lg">
                    <input classname="rounded-md py-1 " type="text" placeholder="Username" required/>
                </div>
                    <br/>
                <div className="input-box">
                    <input  className="" type="text" placeholder="Password" required/>
                </div>
                <br/>
                <div className="remeber-forget space-x-4">
                    <label><input className="font-mono" type="checkbox" /> Remember me</label>
                    <a className="text-blue-500 underline underline-offset-1" href="#">Forgot Password?</a>
                </div>
                <br/>
                <button className= " flex bg-white shadow-lg rounded-lg px-3 py-2 text-center hover:bg-purple-400">
                    submit
                </button>
                <br/>
                <div>
                    <p>Don't have an account? <a className="text-blue-500 underline underline-offset-1" href="#">Register</a></p>
                </div>
            </form>
        </div>
    )

}

export default Login