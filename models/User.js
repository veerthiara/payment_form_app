const mongoose = require('mongoose');
// const Schema = mongoose.Schema; this can be condensed to the code below

const {Schema} = mongoose;

const userSchema = new Schema({
	googleId: String,
	credits: {type: Number, default:0 }
});

mongoose.model('users',userSchema);
