import Counter from "./components/Counter";
import Loading from "./components/Loading";
import Number from "./components/Number";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useGetTodosQuery } from "./store/services/todosApi";

const App = () => {
  // These are similar to how ApolloClient would work
  const { data: todos, error } = useGetTodosQuery();

  return (
    <div className="flex flex-col gap-4 p-8 max-w-[768px] mx-auto">
      <Loading />
      <Loading v="top" />
      <Loading h="right" />
      <Loading v="top" h="right" />

      <Counter />

      {error && <div className="text-red-500">{console.log(error)}</div>}

      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}

      <Number />

      <TodoForm />
    </div>
  );
};

export default App;
