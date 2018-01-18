const mongoose = require('mongoose');
const recipientSchema = require('./Recipient');

const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date,
  // the underscore here is convention: it's to indicate
  // that it's a relationship to another model
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('surveys', surveySchema);
