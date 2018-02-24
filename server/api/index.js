const express = require(`express`);
const route = express.Router();
const kanbanRoute = require(`./kanban`);
module.exports = route;

route.use(`/kanban`, kanbanRoute);