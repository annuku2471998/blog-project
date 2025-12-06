
import mongoose from "mongoose";
import User from "./user.js"

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
    content: {
        type: String,
        required: true
      },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});


const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;