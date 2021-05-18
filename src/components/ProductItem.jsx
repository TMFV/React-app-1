import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { createUseStyles } from 'react-jss';
import { loadImage } from './utils/loadimage/index';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 10,
    //'& img': { height: 100 },
    /* '&:hover': {
      backgroundColor: x => (x < 5 ? 'red' : 'green'),
      color: 'white',
    }, */
  },
  card: {
    padding: 10,
  },
  image: {
    height: 100,
  },
  green: {
    '&.MuiPaper-root': {
      backgroundColor: 'green',
    },
  },
});

const ProductItem = ({ product }) => {
  let x = 10;
  const classes = useStyles(x);

  return (
    <li className={classes.item}>
      <CardActionArea>
        <Card
          className={[classes.card, product.insurance ? classes.green : '']}
        >
          <p>Product name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Count: {product.count}</p>
          <p>Color: {product.color || '--'}</p>
          {/* ?-превіряє наявність об'єкта та приптняє виконання якщо його немає - блокує помилку  undefined  */}
          <p>A / I: {product?.insurance?.toString() || '--'}</p>
          <p>I / S: {product?.software?.toString() || '--'}</p>
          <img
            className={classes.image}
            src={loadImage(product.imgRef)}
            alt={product.name}
          />
        </Card>
      </CardActionArea>
      <IconButton>
        <AddShoppingCartIcon />
      </IconButton>
    </li>
  );
};

export default ProductItem;
