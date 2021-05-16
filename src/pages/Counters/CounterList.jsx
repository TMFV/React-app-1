import CounterItem from './CounterItem';

const CounterList = ({ counters, onIncrement, onDecrement, onDelete }) => {
  return (
    <ul className="counter-list">
      {counters.map(counter => (
        <CounterItem
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default CounterList;
