import useTodos from "../store/hooks/useTodos";

const Loading = ({ v = "bottom", h = "left" }) => {
  const {
    data: { loading, todos },
    actions,
  } = useTodos();

  return (
    <div
      className={`${v === "top" ? "top-0" : "bottom-0"} ${
        h === "left" ? "left-0" : "right-0"
      } p-4 rounded w-[320px] h-[100px] fixed flex justify-center items-center bg-blue-500 bg-opacity-25`}
    >
      {loading && <h1 className="text-2xl">Loading...</h1>}
      {!loading && (
        <>
          <div>Latest todo title: {todos[todos.length - 1]?.title}</div>
          <button
            className="p-2 bg-gray-100 hover:bg-gray-200"
            onClick={() => actions.createTodo({ title: "Added from loader" })}
          >
            Add Todo
          </button>
        </>
      )}
    </div>
  );
};

export default Loading;
