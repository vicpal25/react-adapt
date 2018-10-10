const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const athletePreferencesSchema = new Schema({
    distance_measurement: String,
    weekly_progress_max: Number,
    strava_id: Number
})

const ModelClass = mongoose.model('athletePreferences', athletePreferencesSchema);

module.exports = ModelClass;