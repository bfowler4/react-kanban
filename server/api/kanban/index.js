const express = require(`express`);
const router = express.Router();
const Card = require(`../../db/models/Card`);
module.exports = router;

router.route(`/`)
.get((req, res) => {
  return Card.fetchAll()
  .then(cards => {
    return res.json(cards);
  })
  .catch(err => res.status(400).json({ message: err.message }));
})
.post((req, res) => {
  let { title, priority, created_by, assigned_to } = req.body;
  return new Card({ title, priority, created_by, assigned_to })
  .save()
  .then(card => res.json(card))
  .catch(err => res.status(400).json({ message: err.message }));
});

router.route(`/:id`)
.get((req, res) => {
  return new Card({ id: req.params.id })
  .fetch()
  .then(card => {
    return res.json(card);
  })
  .catch(err => res.status(400).json({ message: err.message }));
})
.put((req, res) => {
  return new Card({ id: req.params.id })
  .save(req.body)
  .then(card => res.json(card))
  .catch(err => res.status(400).json({ message: err.message }));
})
.delete((req, res) => {
  return new Card({ id: req.params.id })
  .destroy({ require: true })
  .then(success => res.json({ message: `deleted card #${req.params.id}` }))
  .catch(err => res.status(400).json({ message: err.message }));
})