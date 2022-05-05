import { useCreateTodoMutation } from "../store/services/todosApi";

const TodoForm = ({ onSubmit }) => {
  // These are similar to how ApolloClient would work
  const [createTodo, { isLoading }] = useCreateTodoMutation();

  return (
    <form
      className="flex justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const titleInput = form.elements.title;
        createTodo({ title: titleInput.value }).then(() => form.reset());
      }}
    >
      <input
        className="p-1 border border-black flex-grow mr-4"
        type="text"
        name="title"
      />
      <button
        className="bg-gray-200 hover:bg-gray-300 p-2"
        type="submit"
        disabled={isLoading}
      >
        Create Todo
      </button>
    </form>
  );
};

export default TodoForm;
