const express = require("express");
const post = express.Router();
const jwt = require("jsonwebtoken");
const { PostModel } = require("../../database");
const dotenv = require("dotenv");
dotenv.config();

post.get("/yourposts", async (req, res) => {
    const token = req.headers.authorization;
    if(!token) return res.json({
        status : "failed",
        message : "No token provided"
    });
    try{
        const decoded = await jwt.verify(token, process.env.SECRET_PASS);
        if(!decoded){
            return res.json({
                status : "failed",
                message : "No token provided"
            });
        }
        const posts = await PostModel.find({fromEmail : decoded.email});
        const result = [];
        for(let i = 0; i < posts.length; i++){
            console.log("1");
            const post = posts[i];
            const {title, text, likes, comments, _id} = post;
            let yes = false;
            console.log();
            post.Likesfrom.forEach((like) => {
                if(like.email === decoded.email){
                    yes = true;
                }
            })
            console.log(yes);
            result.push({id : _id, title, content : text, likes, comments,Liked : yes});
        }
        console.log(result);
        res.json({
            status : "success",
            posts : result
        });
    }catch(e){
        res.json({
            status : "failed",
            message : "Invalid token"
        });
    }
})

post.post("/upload", async (req, res) => {
    const token = req.headers.authorization;
    if(!token) return res.json({
        status : "failed",
        message : "No token provided"
    });
    try{
        const decoded = await jwt.verify(token, process.env.SECRET_PASS);
        if(!decoded){
            return res.json({
                status : "failed",
                message : "No token provided"
            });
        }
        const {title, content} = req.body;
        const post = new PostModel({
            fromEmail : decoded.email,
            title,
            text : content
        });
        await post.save();
        const {text, likes, comments, _id} = post;

        res.json({
            status : "success",
            message : "Post uploaded",
            newPost : {id : _id, title, content : text, likes, comments, yes : false}
        });
    }catch(e){
        res.json({
            status : "failed",
            message : "Invalid token"
        });
    }
})

module.exports = {
    post
}