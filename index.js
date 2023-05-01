
const express = require('express');
const app = express();

require('dotenv').config();

const passport = require("./config/google-auth")

const { connection } = require('./config/db');

app.use(express.json());


app.get('/', (req, res) => {
    res.send("HOME PAGE");
})


app.get('/auth/google', passport.authenticate('google', { scope: ['profile',"email"] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', session:false }), function (req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect('/');
});



app.listen(process.env.port, async () => {
    try {
        await connection
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
    console.log(`server is running on port ${process.env.port}`);
})