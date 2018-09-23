const BlogEntries = require('../model/blogentries');

exports.index = function(req, res, next){

    // req.checkBody('email', 'A email is needed.').notEmpty();
    // req.checkBody('password', 'A valid password is needed.').notEmpty();
 
    // let errors = req.validationErrors();
    // if (errors) {
    //     return res.status(500).send(errors);
    // }
 
    const email = req.body.email;
    const password = req.body.password;


    BlogEntries.find(function(err, existingUser) {

        if(err) { return next(err); }

        if(existingUser) {
            return res.status(422).json('email in use');
        }


    })
    

}