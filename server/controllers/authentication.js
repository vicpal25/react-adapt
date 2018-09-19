const User = require('../model/user');

exports.signup = function(req, res, next){

    req.checkBody('email', 'A email is needed.').notEmpty();
    req.checkBody('password', 'A valid password is needed.').notEmpty();
 
    let errors = req.validationErrors();

    console.log(errors);

    if (errors) {
        return res.status(500).send(errors);
    }
 
    const email = req.body.email;
    const password = req.body.password;


    User.findOne({ 'email' : email }, function(err, existingUser) {

        if(err) { return next(err); }

        if(existingUser) {
            return res.status(422).json('email in use');
        }

       const user = new User({
           "email": email,
           "password" : password
       })

       user.save(function(err) {

        if(err) { return next(err); }

        return res.json(user)

       });

    })
    

    


}