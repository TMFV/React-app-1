const CounterItem = ({ counter, onIncrement, onDecrement, onDelete }) => {
  const handleDecrement = () => onDecrement(counter.id);
  const handleIncrement = () => onIncrement(counter.id);
  const handleDelete = () => onDelete(counter.id);

  return (
    <li className="counter-item" key={counter.id}>
      <button onClick={handleDecrement}>-</button>
      <span>{counter.value}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
export default CounterItem;
