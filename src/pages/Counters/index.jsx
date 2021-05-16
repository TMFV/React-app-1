import { useState, useEffect } from 'react';
import SingleCounter from './SingleCounter';
import CounterList from './CounterList';

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 13121313, value: 12 },
    { id: 23132323, value: 87 },
  ]);

  //component did mount --- after data update
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('counters'));
    setCounters(data);
  }, []);

  //component did update --- after data update
  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  const addCounter = () =>
    setCounters(prevState => [...prevState, { id: Date.now(), value: 0 }]);

  //always after rener //component did update
  useEffect(() => {
    console.log('render');
  });

  const handleDeleteCounter = id => {
    setCounters(prevState => prevState.filter(counter => counter.id !== id));
  };

  const handleIncrement = id => {
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter,
      ),
    );
  };
  const handleDecrement = id => {
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter,
      ),
    );
  };

  return (
    <div className="counters">
      <h2>Counters</h2>
      <button onClick={addCounter}>+ Add counter</button>
      <CounterList
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDeleteCounter}
      />
      <SingleCounter initialValue={5} />
    </div>
  );
};

export default Counters;
