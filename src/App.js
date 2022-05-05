import { useEffect } from "react";
import Counter from "./components/Counter";
import Loading from "./components/Loading";
import Number from "./components/Number";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import useTodos from "./store/hooks/useTodos";

const App = () => {
  const {
    data: { error, todos },
    actions,
  } = useTodos();

  useEffect(() => {
    actions.getTodos();
  }, [actions]);

  return (
    <div className="flex flex-col gap-4 p-8 max-w-[768px] mx-auto">
      <Loading />
      <Loading v="top" />
      <Loading h="right" />
      <Loading v="top" h="right" />

      <Counter />

      {error && <div className="text-red-500">{error}</div>}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdate={actions.updateTodo}
          onDelete={actions.deleteTodo}
        />
      ))}

      <Number />

      <TodoForm onSubmit={actions.createTodo} />
    </div>
  );
};

export default App;
