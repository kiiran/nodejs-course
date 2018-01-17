const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Required for using cookies
app.use(passport.initialize());
app.use(passport.session());

// This is the same as requiring the exported function from authRoutes
// as a named const and then calling the function like authRoutes(app)
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
