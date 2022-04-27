import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import useTodos from "./store/hooks/useTodos";

const App = () => {
  const {
    data: { error, loading, todos },
    actions,
  } = useTodos();

  return (
    <div className="flex flex-col gap-4 p-8 max-w-[768px] mx-auto">
      {loading && (
        <div className="bottom-0 left-0 w-[320px] h-[100px] fixed flex justify-center items-center bg-blue-500 bg-opacity-25">
          <h1 className="text-2xl">Loading...</h1>
        </div>
      )}

      {error && <div className="text-red-500">{error}</div>}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdate={actions.updateTodo}
          onDelete={actions.deleteTodo}
        />
      ))}

      <TodoForm onSubmit={actions.createTodo} />
    </div>
  );
};

export default App;
