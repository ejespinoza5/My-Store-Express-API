const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  // Método para generar productos iniciales
  generate() {
    const size = 100;
    for (let i = 0; i < size; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  // Método para crear un nuevo producto
  create(productData) {
    const newProduct = {
      id: faker.string.uuid(),
      ...productData,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  // Método para obtener todos los productos
  find() {
    return this.products;
  }

  // Método para encontrar un producto por su ID
  findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  // Método para actualizar un producto por su ID
  update(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = { ...product, ...changes };
    return this.products[index];
  }

  // Método para eliminar un producto por su ID
  delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const deletedProduct = this.products.splice(index, 1);
    return deletedProduct[0];
  }
}

module.exports = ProductsService;
