const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
        clientID: '801683304426-de5h026433orsk64iv2lid61bs7i3c1d.apps.googleusercontent.com',
        clientSecret: 'iNGw_QgYDIffjbuDZsAq-wT3',
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.profile.emails.read'] }));
router.get('/google/callback',  passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/logged');
    });

module.exports = router;