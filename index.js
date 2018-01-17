const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// This is the same as requiring the exported function from authRoutes
// as a named const and then calling the function like authRoutes(app)
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
