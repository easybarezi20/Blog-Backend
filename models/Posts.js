  const mongoose = require("mongoose");
  
  const PostsSchema = new mongoose.Schema(
    {
        Header:{
            type: String,
            required: true,
        },
        details:{
            type: String,
            required: true,
        },
        photos:{
            type: String,
            required: true,
        }
    }
  );

  const Posts = mongoose.model("Posts", PostsSchema);
  module.exports = Posts;