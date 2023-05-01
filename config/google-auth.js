
require('dotenv').config();

const passport = require("passport");

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
        
    console.log(profile);
    return cb(null, "user login success");

      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    // });
  }
));


module.exports = passport;