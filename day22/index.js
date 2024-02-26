const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
});

const Product = mongoose.model('Product', productSchema);

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Create operation
async function createProduct(name, price, quantity) {
  try {
    const product = new Product({ name, price, quantity });
    const savedProduct = await product.save();
    console.log('Product created:', savedProduct);
    return savedProduct;
  } catch (error) {
    console.error('Error creating product:', error);
  }
}

// Read operation
async function readProduct(productId) {
  try {
    const product = await Product.findById(productId);
    console.log('Product found:', product);
    return product;
  } catch (error) {
    console.error('Error reading product:', error);
  }
}

// Update operation
async function updateProduct(productId, updates) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
    console.log('Product updated:', updatedProduct);
    return updatedProduct;
  } catch (error) {
    console.error('Error updating product:', error);
  }
}

// Delete operation
async function deleteProduct(productId) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    console.log('Product deleted:', deletedProduct);
    return deletedProduct;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}


async function testCRUDOperations() {
  const createdProduct = await createProduct('Laptop', 999, 10);
  const productId = createdProduct._id;

  await readProduct(productId);

  await updateProduct(productId, { price: 1099 });

  await deleteProduct(productId);

  mongoose.disconnect();
}

testCRUDOperations();
