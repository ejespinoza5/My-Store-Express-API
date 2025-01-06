const express = require('express'); // Import express
const { faker } = require('@faker-js/faker'); // Import faker
const app = express(); // asignar express a app
const port = 3000; // Port

app.get('/', (req, res) => {
  res.send('<h1>Josue Espinoza</h1>'); // Send a response
});

app.get('/nueva-ruta', (req, res) => {
  res.send('<h1>Nueva ruta de Josue</h1>'); // Send a response
});

app.get('/products', (req, res) => {
  const products = [];

  for (let i = 0; i < 100; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()  // Corrección aquí
    });
  }

  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'producto 1',
    price: 100
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
