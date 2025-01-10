const express = require('express'); // Import express
const { faker } = require('@faker-js/faker'); // Import faker
const router = express(); // asignar express a router




router.get('/', (req, res) => {
  const products = [];
  const size = parseInt(req.params) || 10;
  for (let i = 0; i < size; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'producto 1',
    price: 100
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'producto creado',
    data: body
  });
});

module.exports = router; // Export router
