import { useState } from "react";
import api from "../services/api";
import Editor from "@monaco-editor/react";

function Review(){

    const [language,setLanguage] = useState("cpp");
    const [code,setCode] = useState("");
    const [review,setReview] = useState("");
   const [loading,setLoading] = useState(false);


   const handleSubmit = async()=>{

    setLoading(true);

    try{

        const token = localStorage.getItem("token");


        const res = await api.post(
            "/code/review",
            {
                language,
                code
            },
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        );


        setReview(res.data.review.review);


    }
    catch(error){

        console.log(error);

        alert(
            error.response?.data?.message || 
            "Something went wrong"
        );

    }
    finally{

        setLoading(false);

    }

}; 


    return(

        <div className="min-h-screen bg-gray-900 text-white p-10">

<h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
    🤖 AI Code Review
</h1>

<p className="text-gray-400 mb-8">
    Get instant AI-powered feedback, bug detection and optimization suggestions.
</p>
           



            <select

            value={language}

            onChange={(e)=>setLanguage(e.target.value)}

            className="bg-gray-800 p-3 rounded mb-5"

            >

                <option value="cpp">
                    C++
                </option>

                <option value="python">
                    Python
                </option>

                <option value="javascript">
                    JavaScript
                </option>


            </select>

<button
onClick={() => navigator.clipboard.writeText(code)}
className="mb-4 bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg transition"
>
📋 Copy Code
</button>

            <div className="mt-5 rounded-xl overflow-hidden border border-gray-700">

<Editor

height="400px"

theme="vs-dark"

language={language}

value={code}

onChange={(value)=>setCode(value || "")}

options={{
    fontSize:16,
    minimap:{
        enabled:false
    },
    automaticLayout:true
}}

/>

</div>
            




            <button

            onClick={handleSubmit}

            disabled={loading}

            className="mt-5 bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-4 rounded-xl font-bold transition duration-300 shadow-lg"

            >

             {
 loading ? (
   <span className="flex items-center gap-3">
     <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></span>
     Analyzing with AI...
   </span>
 ) : (
   "Analyze Code 🚀"
 )
}  

            </button>


             {
review &&

<div className="mt-8 space-y-5">


    <h2 className="text-3xl font-bold text-cyan-400">
        AI Feedback 🤖
    </h2>



   <div className="mt-8 bg-gray-800 border border-cyan-400/30 p-8 rounded-2xl shadow-xl">

        <h3 className="text-xl font-bold text-red-400 mb-3">
            🐛 Bugs
        </h3>

        <p className="whitespace-pre-line">
            {review.split("2. Improvements:")[0]}
        </p>

    </div>


<div className="mt-8 bg-gray-800 border border-cyan-400/30 p-8 rounded-2xl shadow-xl">
   

        <h3 className="text-xl font-bold text-yellow-400 mb-3">
            💡 Improvements
        </h3>

        <p className="whitespace-pre-line">
            {review.includes("2. Improvements:")
            ? review.split("2. Improvements:")[1].split("3. Complexity:")[0]
            : ""}
        </p>

    </div>




   <div className="mt-8 bg-gray-800 border border-cyan-400/30 p-8 rounded-2xl shadow-xl">

        <h3 className="text-xl font-bold text-green-400 mb-3">
            ⏱ Complexity
        </h3>

        <p className="whitespace-pre-line">
            {review.includes("3. Complexity:")
            ? review.split("3. Complexity:")[1].split("4. Final Verdict:")[0]
            : ""}
        </p>

    </div>




    <div className="mt-8 bg-gray-800 border border-cyan-400/30 p-8 rounded-2xl shadow-xl">

        <h3 className="text-xl font-bold text-cyan-400 mb-3">
            ✅ Final Verdict
        </h3>

        <p className="whitespace-pre-line">
            {review.includes("4. Final Verdict:")
            ? review.split("4. Final Verdict:")[1]
            : ""}
        </p>

    </div>


</div>
}

           



        </div>

    );

}


export default Review;