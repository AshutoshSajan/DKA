var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('../models/User');
var jwtAuth = require('../config/jwtAuth');

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) { 
    console.log(profile, "user profile......");  
    User.findOne({ email: profile.emails[0].value }, (err, user) => {
      if(err) return done(null, null);
      if(user){
        if(user.strategies.includes(profile.provider)){
          console.log(user, "user strategies found......")
          return done(null, user);
        }
        else {
          User.findOneAndUpdate({ email: user.email },
            {
              $push: { strategies: profile.provider },
              photo: profile.photos[0].value,
              google: { name: profile.displayName }
            },(err, user) => {
              if(err) return done(err)
              return done(null, user);
          })
        }
      } else {
        console.log('cp1', profile)
        User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value,
          google: {
            name: profile.displayName
          },
          strategies: [profile.provider]
        },(err, user) => {
          if(err) { return done(err) };

          done(null, user);
        })
			}	
		});
  }
));

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google/callback', function(req, res, next) {
  passport.authenticate('google', function(err, user) {
    console.log(user, "google user........")
    if(err) {
      return res.send({ message: 'Something went wrong with google auth' });
    }
    // generate token
    var token = jwtAuth.signToken({ _id: user._id });
    // send the response it back to client.
    res.redirect('/?t='+token);
  })(req, res, next);
});

module.exports = router;