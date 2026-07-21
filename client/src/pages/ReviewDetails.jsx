import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";


function ReviewDetails(){

    const {id} = useParams();

    const [review,setReview] = useState(null);



    useEffect(()=>{

        const fetchReview = async()=>{

            try{

                const token = localStorage.getItem("token");


                const res = await api.get(
                    `/code/${id}`,
                    {
                        headers:{
                            Authorization:`Bearer ${token}`
                        }
                    }
                );


                setReview(res.data);


            }
            catch(error){

                console.log(error);

            }

        };


        fetchReview();


    },[id]);



    if(!review){

        return(
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                Loading...
            </div>
        )

    }



    return(

        <div className="min-h-screen bg-gray-900 text-white p-10">


            <h1 className="text-4xl font-bold text-cyan-400">
                Review Details 🤖
            </h1>



            <div className="bg-gray-800 p-6 rounded-xl mt-8">


                <h2 className="text-2xl font-bold">
                    Language: {review.language}
                </h2>


                <h3 className="mt-6 text-xl text-cyan-400">
                    Your Code
                </h3>


                <pre className="bg-black p-5 rounded mt-3 overflow-auto">
                    {review.code}
                </pre>



                <h3 className="mt-6 text-xl text-cyan-400">
                    AI Feedback
                </h3>


                <p className="mt-3 whitespace-pre-line">
                    {review.review}
                </p>


            </div>


        </div>

    );

}


export default ReviewDetails;