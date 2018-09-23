
const Authentication = require('./controllers/authentication');
const BlogController = require('./controllers/blog.controller');
const passportService = require('./services/passport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', {session: false })
const requireSignin = passport.authenticate('local', {session: false })


module.exports = function(app) {

    app.post('/', requireAuth, function(req, res) {
        res.send('hi');
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
    app.get('/blogentries', BlogController.index);

}
