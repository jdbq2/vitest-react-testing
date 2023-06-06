import { useState } from "react";

const ThirdTestComponent = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((before) => before + 1)}>
        Increment
      </button>
      <input
        type="number"
        name="amount"
        id="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setCount(parseInt(inputValue))}>Set</button>
    </div>
  );
};

export default ThirdTestComponent;
