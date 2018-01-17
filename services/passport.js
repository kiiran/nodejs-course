const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleID,
      clientSecret: keys.googleSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      const { id, name: { givenName, familyName } } = profile;

      User.findOne({ googleID: id }).then(foundUser => {
        if (foundUser) {
          done(null, foundUser);
        } else {
          new User({ googleID: id, firstName: givenName, lastName: familyName })
            .save()
            .then(newUser => done(null, newUser));
        }
      });
    }
  )
);
