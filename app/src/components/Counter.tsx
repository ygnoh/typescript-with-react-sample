import * as React from 'react';

interface Props {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

const Counter: React.SFC<Props> = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>Counter</h1>
    <h3>{value}</h3>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default Counter