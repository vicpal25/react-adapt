const request = require('request');
const strava = require('strava-v3');
const Athlete = require('../../model/athlete');

module.exports = {
  version: '1.0',
  //stand alone cache client
  load: function () {

    strava.athlete.get({
      'access_token': '37339e182ee178884b7353d74b7fd8802e64d898'
    }, function (err, payload, limits) {
      //do something with your payload, track rate limits      

      if (!err) {

        Athlete.findOne({
          'strava_id': payload.id
        }, function (err, athlete) {

          if (!athlete) {

            const athlete = new Athlete({
              email: payload.email,
              username: payload.username,
              firstname: payload.firstname,
              lastname: payload.lastname,
              city: payload.city,
              state: payload.state,
              profile_pic: payload.profile,
              follower_count: payload.follower_count,
              friend_count: payload.friend_count,
              strava_id: payload.id
            })


            athlete.save(function (err) {

              if (err) {
                return next(err);
              }

            });

          }

        });

      } else {
        console.log(err);
      }

    });
  },
  getAthlete: function (id) {

    return new Promise((resolve, reject) => {
      
      Athlete.findOne({ 'strava_id': id }, function (err, athlete) {

        if (!athlete) {
          reject('No athlete found based on given id');
        } else {
          resolve(athlete);
        }

      })

    })


  },
  getActivities: function(id) {

    return new Promise((resolve, reject) => {
      
      strava.athlete.listActivities({
        'access_token': '37339e182ee178884b7353d74b7fd8802e64d898'
      }, function (err, payload, limits) {

  
        if(err) {
          reject(err);
        }

        resolve(payload);
  
      });
  

    });




  }
}