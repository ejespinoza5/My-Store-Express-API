const express = require('express'); // Import express
const routerApi = require('./routes'); // Import routes
const { faker } = require('@faker-js/faker'); // Import faker
const app = express(); // asignar express a app
const port = 3000; // Port
app.use(express.json()); // Use json

app.get('/', (req, res) => {
  res.send('<h1>Josue Espinoza</h1>'); // Send a response
});

app.get('/nueva-ruta', (req, res) => {
  res.send('<h1>Nueva ruta de Josue</h1>'); // Send a response
});

routerApi(app); // Use routerApi







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
