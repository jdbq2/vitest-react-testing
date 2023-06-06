import { useState } from "react";

interface Props {
  initialCount: number;
}
const useCounter = ({ initialCount }: Props) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export default useCounter;
