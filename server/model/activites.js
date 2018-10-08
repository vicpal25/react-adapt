const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const activitySchema = new Schema({
    activity_id: Number,
    name: String,
    moving_time: Date,
    type: String,
    workout_type: String,
    start_date: Date,
    end_date: Date,
    location_city: Number,
    location_country: Number,
    max_speed: Number,
    distance: Number
})

const ModelClass = mongoose.model('athlete', activitySchema);

module.exports = ModelClass;