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
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, name: { givenName, familyName } } = profile;
      const user = await User.findOne({ googleID: id });

      if (user) return done(null, user);

      const newUser = await new User({
        googleID: id,
        firstName: givenName,
        lastName: familyName
      }).save();
      done(null, newUser);
    }
  )
);
