const {mongoose} = require("mongoose");
const dotenv = require("dotenv");
const { postcss } = require("tailwindcss");
dotenv.config();

mongoose.connect(process.env.MONGO_ID);

const PostSchema = new mongoose.Schema({
    from : {type: String, required:  true},
    fromEmail : {type : String, required : true},
    text : {type : String, required : true},
    likes : {type  :Number, default : 0},
    comments : {type : [{
        from: String,
        from: String
    }], default : []}

})

const UserSchema = new mongoose.Schema({
    email : { type : String, required : true},
    password  : {type : String, required : true},
})

const UserModel = mongoose.model("User", UserSchema);
const PostModel = mongoose.model("Post", PostSchema);

module.exports = {
    UserModel,
    PostModel
}