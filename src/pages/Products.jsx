import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

/* const products = [
  {
    id: 1,
    name: 'Phone 1100',
    price: 5000,
    count: 8,
    imgRef: 'phoneimg',
  },
  {
    id: 2,
    name: 'Phone 2200',
    price: 5500,
    count: 0,
    imgRef: '-',
  },
  {
    id: 3,
    name: 'Phone 3300',
    price: 5550,
    count: 10,
    imgRef: '-',
  },
  {
    id: 4,
    name: 'Notebook i9',
    price: 7777,
    count: 3,
    imgRef: 'notebookimg',
  },
]; */

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Phone 1100',
      price: 5000,
      count: 8,
      imgRef: 'phoneimg',
    },
  ]);
  //ComponentDidMount
  useEffect(() => {
    const prod = JSON.parse(localStorage.getItem('products'));
    setProducts(prod);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = newItem => {
    /* newItem = {
      id: Date.now(), // uuid or backend id
      name: 'Phone 2200',
      price: 100000,
      count: 18,
      imgRef: 'phoneimg',
    }; */
    setProducts(prev => [...prev, newItem]);
  };
  return (
    <div className="products">
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default Products;
