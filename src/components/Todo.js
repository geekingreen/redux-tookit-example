const Todo = ({ todo, onUpdate, onDelete }) => (
  <div className="flex items-center shadow p-4">
    <input
      className="mr-2"
      type="checkbox"
      checked={todo.completed}
      onChange={(e) => onUpdate({ ...todo, completed: e.target.checked })}
    />
    {todo.title}{" "}
    <button className="ml-auto bg-gray-200 hover:bg-gray-300 w-[35px] h-[35px] rounded-full" onClick={() => onDelete(todo)}>
      X
    </button>
  </div>
);

export default Todo;
