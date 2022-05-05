import useCounter from "../store/hooks/useCounter";

const Button = ({ children, ...props }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    {...props}
  >
    {children}
  </button>
);

const Counter = () => {
  const { count, actions } = useCounter();

  return (
    <div className="flex justify-between items-center">
      <Button onClick={actions.decrement}>&lt;-</Button>
      <div className="text-8xl">{count}</div>
      <Button onClick={actions.increment}>-&gt;</Button>
    </div>
  );
};

export default Counter;
