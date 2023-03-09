import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  increment,
  decrement,
  incrementRandom,
} from "../../actions/counterActions";

const Counter = () => {
  const count = useSelector<RootState, number>(
    (state) => state.counter.counter
  );
  const dispatch = useDispatch();
  console.log({ count });

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementRandom(100));
        }}
      >
        Random
      </button>
    </div>
  );
};

export default Counter;
