const express = require(`express`);
const router = express.Router();
const User = require(`../../db/models/User`);

const passport = require(`passport`);
const LocalStrategy = require(`passport-local`);
const bcrypt = require(`bcrypt`);

const saltRounds = 12;

module.exports = router;

passport.serializeUser((user, done) => {
  console.log(`serializing`);
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log(`deserializing`);
  return new User({ id: user.id })
  .fetch()
  .then(user => {
    user = user.toJSON();
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  new User({ username: username })
  .fetch()
  .then(user => {
    if (user === null) {
      return done(null, false, { message: `bad username or password` });
    } else {
      user = user.toJSON();
      bcrypt.compare(password, user.password)
      .then(res => {
        if (res) {
          return done(null, user);
        } else {
          return done(null, false, { message: `bad username or password` });
        }
      });
    }
  });
}));

router.route(`/login`)
.post(passport.authenticate(`local`), (req, res) => {
  return res.json(req.user);
});

router.route(`/register`)
.post((req, res) => {
  return bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      let { username } = req.body;
      return new User({ username, password: hash })
      .save()
      .then(user => {
        return res.json(user);
      })
      .catch(err => res.status(400).json({ message: err.message }));
    });
  });
});

router.route(`/logout`)
.post((req, res) => {
  req.logout();
  return res.json({ message: `user logged out` });
});