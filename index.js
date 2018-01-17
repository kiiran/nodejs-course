const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000;

// auth
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleID,
      clientSecret: keys.googleSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken) => {
      console.log('accessToken', accessToken);
    }
  )
);

// routes
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.listen(PORT);
