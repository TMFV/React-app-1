import ProductList from '../components/ProductList';

const products = [
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
];

const Products = () => {
  return (
    <div className="products">
      <ProductList products={products} />
    </div>
  );
};

export default Products;
