const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const applicationSchema = new Schema({
  // the username and password are added by passportLocalMongoose
  // we can add any extra information like facebooktokens (or
  // others) as well as a picture, etc
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  question7: String,
  question8: String,
  question9: String,
  question10: String,
  question11: String,
  applicant: {
    type: Schema.Type.ObjectID
    ref: 'User'
  }
});

questionSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Application', applicationSchema);
