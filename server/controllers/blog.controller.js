const BlogEntries = require('../model/blogentries');

exports.index = function(req, res, next){

    const email = req.body.email;
    const password = req.body.password;


    BlogEntries.find(function(err, existingUser) {

        if(err) { return next(err); }

        if(existingUser) {
            return res.status(422).json('email in use');
        }


    })
    

}