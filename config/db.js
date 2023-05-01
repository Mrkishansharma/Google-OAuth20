
const mongoose = require('mongoose');

require('dotenv').config();

const connection = mongoose.connect(process.env.MONGO_URL);


const userShcema = mongoose.Schema({
    Name : String,
    Email : String,
    Password : String
},{
    versionKey : false
})


const UserModel = mongoose.model("user", userShcema);


module.exports = {
    connection,
    UserModel
}