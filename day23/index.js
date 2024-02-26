const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

// Define Category model
const Category = mongoose.model('Category', categorySchema);

// Define Product model
const Product = mongoose.model('Product', productSchema);

// Function to get products with categories
async function getProductsWithCategories() {
  try {
    const products = await Product
      .find()
      .populate('category');
    return products;
  } catch (error) {
    console.error('Error getting products with categories:', error);
    throw error;
  }
}

// Export the function getProductsWithCategories
module.exports = {
  getProductsWithCategories
};
