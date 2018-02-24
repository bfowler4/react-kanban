const express = require(`express`);
const server = express();
const bodyParser = require(`body-parser`);
const apiRoutes = require(`./api`);

const PORT = process.env.PORT || 8080;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(`/api`, apiRoutes);

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});