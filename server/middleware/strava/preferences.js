const AthletePreferences = require('../../model/athletePreferences');

module.exports = {

    Get: function (id) {
  
      return new Promise((resolve, reject) => {
  
        AthletePreferences.findOne({
          'strava_id': id
        }, function (err, preferences) {
  
          if (err) {
            return next(err);
          }
  
          if (!preferences) {
            reject('No preferences found');
          } else {
            resolve(preferences);
          }
  
        });
      });
  
    },

    Update: function(preferences, strava_id) {

        return new Promise((resolve, reject) => {

            const pref = new AthletePreferences({
                "distance_measurement": preferences.distance_measurement,
                "weekly_progress_max" : preferences.weekly_progress_max,
                "strava_id" : strava_id
            })
    
            pref.update(function(err) {
    
            if(err) { reject(err) }
    
            resolve('ok');
    
            });

        });
    
    }

  }