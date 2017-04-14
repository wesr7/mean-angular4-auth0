import * as express from 'express';

import ProductsCtrl from './controllers/products';
import Product from './models/product.model';

import InventorFormCtrl from './controllers/inventorForm';
import InventorForm from './models/inventorForm.model';

export default function setRoutes(app) {
  
  const products = new ProductsCtrl();
  const inventorForms = new InventorFormCtrl();

  // APIs
  app.route('/api/products').get(products.getAll);
  app.route('/api/products/count').get(products.count);
  app.route('/api/product').post(products.insert);
  app.route('/api/product/:id').get(products.get);
  app.route('/api/product/:id').put(products.update);
  app.route('/api/product/:id').delete(products.delete);

  app.route('/api/inventorforms').get(inventorForms.getAll);
  app.route('/api/inventorforms/count').get(inventorForms.count);
  app.route('/api/inventorform').post(inventorForms.insert);
  app.route('/api/inventorform/:id').get(inventorForms.get);
  app.route('/api/inventorform/:id').put(inventorForms.update);
  app.route('/api/inventorform/:id').delete(inventorForms.delete);

}
