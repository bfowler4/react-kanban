const express = require(`express`);
const server = express();

const PORT = process.env.PORT || 8080;

server.get(`/`, (req, res) => {
  return res.send(`smoke test`);
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});