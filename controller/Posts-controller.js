const express = require("express");
const router = express.Router();
const { Posts } = require("../models")

require("../config/db.connection");

//localhost:4000/posts/createpost
router.post("/createpost", async (req, res, next) => {
    try {
        const createdPost = await Posts.create(req.body);
        res.status(201).json(createdPost)
    } catch (error) {
        console.log(error)
        next(error)
    }
})



module.exports = router;