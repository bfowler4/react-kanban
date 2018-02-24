const express = require(`express`);
const route = express.Router();
module.exports = route;

route.route(`/`)
.get((req, res) => {
  return res.send(`kanban get all smoke test`);
});