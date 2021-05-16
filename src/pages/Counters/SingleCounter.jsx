import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    padding: 10,
  },
  buttons: { display: 'flex' },
});

const limit = 50;

const SingleCounter = ({ initialValue = 0 }) => {
  const classes = useStyles();

  const [value, setValue] = useState(initialValue);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setValue(prevState =>
      prevState + step > limit ? limit : prevState + step,
    );
  };
  const handleDecrement = () => {
    setValue(prevState => (prevState - step < 0 ? 0 : prevState - step));
  };
  const handleChangeStep = e => {
    setStep(Number(e.target.value));
  };
  useEffect(() => {
    console.log('Value', value);
  }, [value]);

  return (
    <div className={classes.counter}>
      <h2>SingleCounter</h2>
      <label htmlFor="">
        Step
        <select value={step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>

      <div className={classes.buttons}>
        <button onClick={handleIncrement}>+</button>
        <p>{value}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default SingleCounter;
