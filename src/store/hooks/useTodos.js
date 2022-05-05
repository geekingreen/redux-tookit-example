import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as todosActions from "../reducers/todos.js";

const useTodos = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);

  const actions = useMemo(
    () => ({
      getTodos: () => dispatch(todosActions.getTodos()),
      createTodo(todo) {
        return dispatch(todosActions.createTodo(todo));
      },
      updateTodo(todo) {
        return dispatch(todosActions.updateTodo(todo));
      },
      deleteTodo(todo) {
        return dispatch(todosActions.deleteTodo(todo));
      },
    }),
    [dispatch]
  );

  return { data, actions };
};

export default useTodos;
