const express = require(`express`);
const router = express.Router();
const kanbanRoute = require(`./kanban`);
module.exports = router;

router.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  res.header(`Access-Control-Allow-Methods`, `*`);
  next();
});

router.use(`/kanban`, kanbanRoute);