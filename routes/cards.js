const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, "../data/cards.json");

router.get('/', (req, res) => {
  try {
    fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
      const cardData = JSON.parse(data);
      res.status(200).send(cardData);
    });
  } catch {
    res.status(500).send({message: "Ha ocurrido un error en el servidor"});
  }

});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
    const parsedCards = JSON.parse(data);
    const cardFound = parsedCards.find((user) => user._id === id);
    if(!cardFound) {
      return res.status(404).send({message: "Esta card no existe"});
    } else {
      res.status(200).send(cardFound);
    }
  });
});

module.exports = router;
