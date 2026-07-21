import Groq from "groq-sdk";
import CodeReview from "../models/codeReview.js";
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});
export const reviewCode = async(req,res)=>{

    try{

        const {language, code} = req.body;


        const response = await groq.chat.completions.create({

            messages:[
                {
                    role:"system",
                    content:
`
You are an expert software engineer.

Analyze the code and provide response in this exact format:

1. Bugs:
- Mention bugs or say No major bugs.

2. Improvements:
- Suggest better approaches.

3. Complexity:
- Time Complexity:
- Space Complexity:

4. Final Verdict:
- Give a short conclusion.

Keep the explanation clear and beginner friendly.
`
                },

                {
                    role:"user",
                    content:
                    `Review this ${language} code:

                    ${code}`
                }
            ],

            model:"llama-3.3-70b-versatile"

        });


        const aiReview =
        response.choices[0].message.content;


       const savedReview = await CodeReview.create({

    user:req.user._id,
    language,
    code,
    review:aiReview

});


        res.json({

            message:"AI Review Generated",
            review:savedReview

        });



    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
export const getReviewById = async (req, res) => {

    try {

        console.log("ID:", req.params.id);
        console.log("USER:", req.user);

        const review = await CodeReview.findById(req.params.id);

        console.log("REVIEW:", review);

        res.json(review);

    } catch (error) {

        console.log("ERROR:", error);

        res.status(500).json({
            message: error.message
        });

    }

};
export const getHistory = async(req,res)=>{

    try{

        const reviews = await CodeReview.find({
            user:req.user._id
        })
        .sort({
            createdAt:-1
        });


        res.json(reviews);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};