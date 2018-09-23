const passport = require('passport');
const User = require('../model/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const JwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey : config.secret
};

const localstrategy = require('passport-local');
const localOptions = {usernameField : 'email' };

const localLogin = new localstrategy(localOptions, function(email, passowrd, done){


    User.findOne({email : email }, function(err, user) {

        if(err) { return done(err, false);  }
        
        if(!user) {
            done(null, false);
        } 

        user.comparePassword(passowrd, function(err, isMatch) {
            if(err) { return done(err, false);  }

            if(!isMatch) {  done(null, false);  }

            return done(null, user);

        })



    })



})



const jwtLogin = new JwtStrategy(JwtOptions, function(payload, done) {


    User.findById(payload.sub, function(err, user) {

        if(err) { return done(err, false);  }
        
        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }


    })

})


passport.use(jwtLogin);
passport.use(localLogin);