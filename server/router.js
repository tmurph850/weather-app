// Home to our backend routes
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const User = require('./models/user');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/signin', requireSignIn, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if ( !email || !password ) {
      return res.status(422).send({errror: "You must provide an email and password."});
    }

    // See if a user with the given email exists
    User.findOne({ email: email }, (err, response) => {
      if ( err ) {
        return err;
      }

      if ( response === null ) {
        res.send({exists: "false"});
      } else {
        res.send({exists: "true"});

      }

    });

  });
};
