const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, "../data/users.json");

router.get('/', (req, res) => {
  try {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      const userData = JSON.parse(data);
      res.status(200).send(userData);
    });
  } catch {
    res.status(500).send({ message: "Ha ocurrido un error en el servidor" });
  }

});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    const parsedUsers = JSON.parse(data);
    const userFound = parsedUsers.find((user) => user._id === id);
    if(!userFound) {
      res.status(404).send({ message: "ID de usuario no encontrado" });
    } else {
      res.status(200).send(userFound);
    }
  });
});

module.exports = router;
