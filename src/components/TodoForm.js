const TodoForm = ({ onSubmit }) => (
  <form
    className="flex justify-between"
    onSubmit={(e) => {
      e.preventDefault();
      const form = e.target;
      const titleInput = form.elements.title;
      onSubmit({ title: titleInput.value }).then(() => form.reset());
    }}
  >
    <input className="border border-black flex-grow mr-4" type="text" name="title" />
    <button className="bg-gray-200 hover:bg-gray-300 p-2" type="submit">Create Todo</button>
  </form>
);

export default TodoForm;
