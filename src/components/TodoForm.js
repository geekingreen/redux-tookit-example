const TodoForm = ({ onSubmit }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const form = e.target;
      const titleInput = form.querySelector("input[name=title]");
      onSubmit({ title: titleInput.value }).then(() => (titleInput.value = ""));
    }}
  >
    <input type="text" name="title" />
    <button type="submit">Create Todo</button>
  </form>
);

export default TodoForm;
