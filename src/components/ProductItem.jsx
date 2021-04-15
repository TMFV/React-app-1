import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    '& img': { height: 100 },
    '&:hover': {
      backgroundColor: x => (x < 5 ? 'red' : 'green'),
      color: 'white',
    },
  },
});

const ProductItem = ({ product }) => {
  let x = 10;
  const classes = useStyles(x);

  return (
    <li className={classes.item}>
      <p>Product name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Count: {product.count}</p>
      <img
        className="product-item__img"
        src={product.imgRef}
        alt={product.name}
      />
    </li>
  );
};

export default ProductItem;
