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
  error: { color: 'red' },
});

const initialState = {
  id: Date.now(), // uuid or backend id
  name: '',
  price: 0,
  count: 0,
  color: 'White',
  insurance: false,
  software: false,
  imgRef: 'phoneimg',
};

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  /*   const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState('phoneimg');

  const handleChangeName = e => setName(e.target.value);
  const handleChangePrice = e => setPrice(e.target.value);
  const handleChangeCount = e => setCount(e.target.value);
  const handleChangeImage = e => setImage(e.target.value); */

  /*   const handleChangeName = e =>
    setState(prev => ({ ...prev, name: e.target.value }));
  const handleChangePrice = e =>
    setState(prev => ({ ...prev, price: e.target.value }));
  const handleChangeCount = e =>
    setState(prev => ({ ...prev, count: e.target.value }));
  const handleChangeImage = e =>
    setState(prev => ({ ...prev, image: e.target.value })); */

  const handleChange = e =>
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleChangeCheckbox = e =>
    setState(prev => ({ ...prev, [e.target.name]: e.target.checked }));

  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const { name, price, count, imgRef, color, insurance, software } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const hasEmptyField = Object.values(state).some(item => !item);
    if (hasEmptyField) {
      setError('Fields are required');
      return;
    }

    const newItem = {
      id: Date.now(), // uuid or backend id
      name: name,
      price: Number(price),
      count: Number(count),
      color: color,
      insurance: insurance,
      software: software,
      imgRef: imgRef,
    };

    onSubmit(newItem);
    setError('');
    setState(initialState);
  };
  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name</span>
        <input
          className={classes.input}
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Price</span>
        <input
          className={classes.input}
          type="number"
          value={price}
          name="price"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Count</span>
        <input
          className={classes.input}
          type="number"
          value={count}
          name="count"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Image</span>
        <select
          className={classes.input}
          value={imgRef}
          name="imgRef"
          onChange={handleChange}
        >
          <option value="phoneimg"> Phone</option>
          <option value="notebookimg"> Notebook</option>
        </select>
      </label>
      <fieldset>
        <legend>Color:</legend>
        <label>
          <span>White</span>
          <input
            name="color"
            type="radio"
            value="White"
            checked={color === 'White'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Black</span>
          <input
            name="color"
            type="radio"
            value="Black"
            checked={color === 'Black'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Green</span>
          <input
            name="color"
            type="radio"
            value="Green"
            checked={color === 'Green'}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Checkbox:</legend>
        <label>
          <span>Advanced insurance (12M)</span>
          <input
            type="checkbox"
            checked={insurance}
            name="insurance"
            onChange={handleChangeCheckbox}
          />
        </label>
        <label>
          <span>Install Software</span>
          <input
            type="checkbox"
            checked={software}
            name="software"
            onChange={handleChangeCheckbox}
          />
        </label>
      </fieldset>

      {error && <p className={classes.error}>{error}</p>}
      <button type="submit">+ ADD</button>
    </form>
  );
};
export default ProductForm;
