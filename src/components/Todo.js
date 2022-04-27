const Todo = ({ todo, onUpdate, onDelete }) => (
  <div className="flex items-center shadow p-4">
    <input
      className="mr-2"
      type="checkbox"
      checked={todo.completed}
      onChange={(e) => onUpdate({ ...todo, completed: e.target.checked })}
    />
    {todo.title}{" "}
    <button className="ml-auto" onClick={() => onDelete(todo)}>
      X
    </button>
  </div>
);

export default Todo;
