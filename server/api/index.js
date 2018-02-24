const express = require(`express`);
const router = express.Router();
const kanbanRoute = require(`./kanban`);
module.exports = router;

router.use(`/kanban`, kanbanRoute);