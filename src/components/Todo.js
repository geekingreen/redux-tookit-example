import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../store/services/todosApi";

const Todo = ({ todo }) => {
  // These are similar to how ApolloClient would work
  const [updateTodo, { isLoading: updateLoading }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: deleteLoading }] = useDeleteTodoMutation();
  const loading = updateLoading || deleteLoading;

  return (
    <div className="flex items-center shadow p-4">
      <input
        disabled={loading}
        className="mr-2"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
      />
      {todo.title}{" "}
      <button
        disabled={loading}
        className="ml-auto bg-gray-200 hover:bg-gray-300 w-[35px] h-[35px] rounded-full"
        onClick={() => deleteTodo(todo)}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
