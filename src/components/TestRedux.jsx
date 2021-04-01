import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../slices/counterSlice';
import { fetchTodos, selectTodos } from '../slices/todoSlice';

export default function TestRedux() {
  const dispatch = useDispatch();
  // count state
  const count = useSelector(selectCount);
  const todos = useSelector(selectTodos);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  React.useEffect(() => {
    dispatch(fetchTodos());
    console.log('todos: ', todos);
  }, [dispatch, todos]);

  return (
    <div className="App">
      <p>count ???: {count}</p>
      <button type="button" onClick={() => onIncrement()}>
        +
      </button>
      <button type="button" onClick={() => onDecrement()}>
        -
      </button>
      <div>
        {todos && todos.map((item) => <p key={item.id}>{item.title}</p>)}
      </div>
    </div>
  );
}
