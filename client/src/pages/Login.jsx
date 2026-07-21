import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


function Login(){

    const navigate = useNavigate();


    const [formData,setFormData] = useState({
        email:"",
        password:""
    });



    const handleChange=(e)=>{

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{

            const res = await api.post(
                "/auth/login",
                formData
            );


            localStorage.setItem(
                "token",
                res.data.token
            );


            alert("Login Successful");


            navigate("/dashboard");


        }
        catch(error){

            console.log(error);

            alert(
              error.response?.data?.message || "Login failed"
            );

        }

    };



    return(

        <div className="min-h-screen bg-gray-900 flex items-center justify-center">


            <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-xl w-96"
            >


                <h1 className="text-3xl text-cyan-400 font-bold text-center mb-6">
                    Login
                </h1>



                <input

                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"

                />



                <input

                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"

                />



                <button

                className="w-full bg-cyan-400 text-black font-bold py-3 rounded"

                >

                    Login

                </button>



            </form>


        </div>

    );

}


export default Login;