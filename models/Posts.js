  const mongoose = require("mongoose");
  
  const PostsSchema = new mongoose.Schema(
    {
        header:{
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
        },
        location:{
            type: String,
            required: true,
        }
    }
  );

  const Posts = mongoose.model("Posts", PostsSchema);
  module.exports = Posts;