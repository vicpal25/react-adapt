const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const athleteSchema = new Schema({
    email: String,
    username: String,
    firstname: String,
    lastname: String,
    city: String,
    state: String,
    profile_pic: String,
    follower_count: Number,
    friend_count: Number,
    strava_id: Number
})

const ModelClass = mongoose.model('athlete', athleteSchema);

module.exports = ModelClass;