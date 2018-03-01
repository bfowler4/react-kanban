const express = require(`express`);
const session = require(`express-session`);
const passport = require(`passport`);
const Redis = require(`connect-redis`)(session);
const bodyParser = require(`body-parser`);
const apiRouter = require(`./api`);
const server = express();

const PORT = process.env.PORT || 8080;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(session({
  store: new Redis(),
  secret: `keyboard cat`,
  resave: false,
  saveUninitialized: false
}));

server.use(passport.initialize());
server.use(passport.session());

server.use(`/api`, apiRouter);

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});