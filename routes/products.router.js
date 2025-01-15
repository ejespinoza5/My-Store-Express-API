const express = require('express'); // Importar express
const ProductsService = require('./../services/products.service'); // Importar ProductsService

const router = express.Router(); // Asignar express a router
const service = new ProductsService(); // Instanciar ProductsService

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
  const products = service.find(); // Llamar correctamente al método find del servicio
  res.json(products); // Devolver la lista de productos
});

// Ruta para un filtro (placeholder)
router.get('/filter', (req, res) => {
  res.send('soy un filter');
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id); // Buscar producto por ID usando el servicio
  if (product) {
    res.json(product); // Si el producto existe, devolverlo
  } else {
    res.status(404).json({ message: 'Producto no encontrado' }); // Si no existe, devolver error 404
  }
});

// Ruta para crear un nuevo producto
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body); // Crear nuevo producto con los datos del cuerpo de la solicitud usando el servicio
  res.status(201).json({
    message: 'Producto creado',
    data: newProduct, // Devolver el producto creado
  });
});

// Ruta para actualizar un producto por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedProduct = service.update(id, body); // Actualizar el producto con el ID usando el servicio
    res.json({
      message: 'Producto actualizado',
      data: updatedProduct, // Devolver el producto actualizado
    });
  } catch (error) {
    res.status(404).json({ message: error.message }); // Si no encuentra el producto, devolver error 404
  }
});

// Ruta para eliminar un producto por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = service.delete(id); // Eliminar el producto con el ID usando el servicio
    res.json({
      message: 'Producto eliminado',
      data: deletedProduct, // Devolver el producto eliminado
    });
  } catch (error) {
    res.status(404).json({ message: error.message }); // Si no encuentra el producto, devolver error 404
  }
});

module.exports = router; // Exportar el router
