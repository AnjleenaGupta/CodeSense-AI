import { Link } from "react-router-dom";
function Home(){

    return(

        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">


            {/* Hero Section */}

            <section className="flex flex-col items-center justify-center text-center py-32 px-6">


                <h1 className="text-6xl font-bold text-cyan-400">
                    CodeSense AI 🚀
                </h1>


                <p className="mt-6 text-xl text-gray-300 max-w-2xl">

                    AI powered code review assistant that finds bugs,
                    suggests improvements and helps you write better code.

                </p>



                <div className="mt-8 flex gap-5">


                  import { Link } from "react-router-dom";
                      <Link
to="/register"
className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-bold"
>
 Start Reviewing 🚀
</Link>  
                    



                   <Link
to="/login"
className="border border-cyan-400 px-8 py-3 rounded-lg font-bold"
>
 Login
</Link>


                </div>


            </section>





            {/* Features */}

            <section className="px-10 pb-20">


                <h2 className="text-4xl text-center font-bold text-cyan-400 mb-10">

                    Powerful Features

                </h2>




                <div className="grid md:grid-cols-3 gap-8">



                   <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-cyan-400 hover:scale-105 transition">

                        <h3 className="text-2xl font-bold">
                            🤖 AI Code Review
                        </h3>

                        <p className="mt-3 text-gray-300">
                            Get intelligent feedback,
                            bug detection and suggestions.
                        </p>

                    </div>





                <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-cyan-400 hover:scale-105 transition">

                        <h3 className="text-2xl font-bold">
                            💻 Monaco Editor
                        </h3>

                        <p className="mt-3 text-gray-300">
                            Write code in a VS Code like editor.
                        </p>

                    </div>




<div className="bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-cyan-400 hover:scale-105 transition">

                        <h3 className="text-2xl font-bold">
                            ⚡ Complexity Analysis
                        </h3>

                        <p className="mt-3 text-gray-300">
                            Understand time and space complexity.
                        </p>

                    </div>


                </div>


            </section>


        </div>

    );

}


export default Home;