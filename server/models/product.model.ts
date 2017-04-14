import * as mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  email: String,
  product_invention_name: String,
  description: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;
