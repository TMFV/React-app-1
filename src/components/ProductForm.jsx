import { createUseStyles } from 'react-jss';
import { useState } from 'react';

/* 
      name: 'Phone 2200', // string
      price: 100000, // number
      count: 18, // number 
      imgRef: 'phoneimg', // select

       */
const useStyles = createUseStyles({
  productForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },
});

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState('phoneimg');

  const handleChangeName = e => setName(e.target.value);
  const handleChangePrice = e => setPrice(e.target.value);
  const handleChangeCount = e => setCount(e.target.value);
  const handleChangeImage = e => setImage(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: Date.now(), // uuid or backend id
      name: name,
      price: Number(price),
      count: Number(count),
      imgRef: image,
    };

    onSubmit(newItem);
  };
  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name</span>
        <input
          className={classes.input}
          type="text"
          value={name}
          onChange={handleChangeName}
        />
      </label>

      <label className={classes.label}>
        <span>Price</span>
        <input
          className={classes.input}
          type="text"
          value={price}
          onChange={handleChangePrice}
        />
      </label>

      <label className={classes.label}>
        <span>Count</span>
        <input
          className={classes.input}
          type="text"
          value={count}
          onChange={handleChangeCount}
        />
      </label>

      <label className={classes.label}>
        <span>Image</span>
        <select
          className={classes.input}
          value={image}
          onChange={handleChangeImage}
        >
          <option value="phoneimg"> Phone</option>
          <option value="notebookimg"> Notebook</option>
        </select>
      </label>

      <button type="submit">+ ADD</button>
    </form>
  );
};
export default ProductForm;
