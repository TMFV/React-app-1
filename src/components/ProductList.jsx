import { createUseStyles } from 'react-jss';
import ProductItem from './ProductItem';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: [0, 10, 10, 10],
  },
});

const ProductList = ({ products }) => {
  const classes = useStyles();
  console.log(classes.list);
  return (
    <ul className={classes.list}>
      {products.map(
        product =>
          !!product.count && (
            <ProductItem
              key={`${product.id}_${product.price}`}
              product={product}
            />
          ),
      )}
    </ul>
  );
};

export default ProductList;
