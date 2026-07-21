import mongoose from "mongoose";

const codeReviewSchema = new mongoose.Schema(
{
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        //required:true
    },

    language:{
        type:String,
        required:true
    },

    code:{
        type:String,
        required:true
    },

    review:{
        type:String,
        default:""
    },

    suggestions:{
        type:[String],
        default:[]
    },

    complexity:{
        type:String,
        default:""
    }

},
{
    timestamps:true
}
);


const CodeReview = mongoose.model("CodeReview", codeReviewSchema);

export default CodeReview;