import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as todosActions from "../reducers/todos.js";

const useTodos = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(todosActions.getTodos());
  }, [dispatch]);

  const actions = {
    createTodo(todo) {
      return dispatch(todosActions.createTodo(todo));
    },
    updateTodo(todo) {
      return dispatch(todosActions.updateTodo(todo));
    },
    deleteTodo(todo) {
      return dispatch(todosActions.deleteTodo(todo));
    },
  };

  return { data, actions };
};

export default useTodos;
