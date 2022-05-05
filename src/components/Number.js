import useCounter from "../store/hooks/useCounter";

const Number = () => {
  const { count } = useCounter();
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-4xl">{count}</h1>
    </div>
  );
};

export default Number;
