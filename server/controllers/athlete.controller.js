const stravaMiddleware = require('../middleware/strava');

exports.index = function (req, res, next) {

    const strava_id = req.params.id;

    stravaMiddleware.getAthlete(strava_id)
        .then(function (athlete) {
            res.status(200).send(athlete);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });

}

exports.getActivities = function(req, res, next) {

    const activties_id = req.params.id;

    stravaMiddleware.getActivities(activties_id)
        .then(function (activities) {
            res.status(200).send(activities);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });


}