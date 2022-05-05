import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as counterActions from "../reducers/counter.js";

const useCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const actions = useMemo(
    () => ({
      increment: () => dispatch(counterActions.increment()),
      decrement: () => dispatch(counterActions.decrement()),
    }),
    [dispatch]
  );

  return { count, actions };
};

export default useCounter;
